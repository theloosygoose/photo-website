<script lang="ts">
    import { modalToggle } from "$lib/stores";
    import { toggleModal } from "$lib/PhotoView/modalUtils";
    
    export let message:string;

</script>

    <button on:click={toggleModal}>{message}</button>

<style>

    button{
        width: fit-content;
        background-color: black;
        border: none;
        position: relative;
        right: 0;
    }

</style>