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
    <button on:click={prevPhoto}>Previous</button>
    <button on:click={nextPhoto}>Next</button>
</div>

<style>
    div{
        display: flex;
        margin-top: 10%;
        justify-content: center;
    }
    button{
        width: 40%;
        margin: 10px;
        background: rgba(0, 0, 0, 0);
        border: none;
    }

</style>