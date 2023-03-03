<script lang="ts">
    import PhotoCard from "../PhotoCard.svelte";

    export let data;
    console.log(data);
    let collection_photos = data.collection_photos;

</script>

<main class="grid">
    {#each collection_photos as photo }
        <PhotoCard img_src={photo.url}/>
        
    {/each}


</main>

<style>

</style>