<script lang="ts">
    import { modalPhoto, modalToggle } from "$lib/stores";
    import type { PhotoData } from "$lib/types";
    import ModalControls from "./ModalControls.svelte";
    import ToggleBtn from "./ToggleBtn.svelte";

    export let photos: Array<PhotoData>;
    export let photo_id:number;
    let collection_length = photos.length;

    modalPhoto.subscribe((i:number ) => {
        photo_id = i; 
    })


    $:current_photo = photos[photo_id];

    let isModal:boolean;
    modalToggle.subscribe((i: boolean) => {
        isModal = i;
    })

</script>


{#if isModal}
    <main>
        <div class="exit container">
            <ToggleBtn message={"X"}/> 
        </div>
        <div class="container photo">
            <img src="https://bold-fog-8666.fly.dev{current_photo.url}" alt="">
        </div>
        <div class="description">{current_photo.caption}</div>
        <ModalControls current_id={photo_id} {collection_length}/>
    </main>
    
{/if}

<style>
    main{
        background: rgba(0, 0, 0, 0.8);
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    div.photo{
        display: flex;
    }
    div.description{
        display: flex;
        justify-content: center;
        align-content: center;
    }
    div.exit {
        display: flex;
        justify-content: end;
    }
    button{
        align-self:self-end;
        margin-top: 20px;
        margin-bottom: 10px;
        width: fit-content;
        background-color: rgba(0, 0, 0, 0.8);
        border: none;
    }

    img {
        opacity: 1;
        z-index: 100;
        max-height: 70vh;
        margin: auto;
    }


</style>