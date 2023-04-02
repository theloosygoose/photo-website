<script lang="ts">
    import { modalPhoto } from "$lib/stores";

    export let collection_length:number;
    export let current_id:number;
    console.log(`Collection Length: ${collection_length} || Current ID: ${current_id}`);

    function nextPhoto(){
        if (current_id < collection_length - 1) {
            modalPhoto.update((i:number) => i = i + 1);
        }
    }

    function prevPhoto(){
        if (current_id > 0) {
            modalPhoto.update((i:number) => i = i - 1);
        }
    }
    modalPhoto.subscribe((i:number) => {
        console.log(i);
    })
</script>

<div class="container ">
    <button class="previous" on:click={prevPhoto}>Prev</button>
    <button class="next" on:click={nextPhoto}>Next</button>
</div>

<style>
    div{
        display: flex;
        margin-top: 10%;
        justify-content: center;
        z-index: 100;
    }
    button{
        width: 40%;
        margin: 10px;
        background: rgba(0, 0, 0, 0);
        border: none;
    }

    button.next{
        right: 0;
    }
</style>