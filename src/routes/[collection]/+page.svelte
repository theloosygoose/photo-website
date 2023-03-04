<script lang="ts">
    import FullscreenBtn from "$lib/PhotoView/FullscreenBtn.svelte";
    import PhotoCard from "../PhotoCard.svelte";

    export let data;
    console.log(data);
    let collection_photos = data.collection_photos;
    let collection_title = data.collection_data.data[0].attributes.title;
    let collection_date = data.collection_data.data[0].attributes.date;

</script>

<header>
    <div>
        <h1>{collection_title}</h1>
        <h5>{collection_date}</h5>
    </div>
    <FullscreenBtn/>

</header>

<main class="container grid">
    {#each collection_photos as photo }
        <PhotoCard img_src={photo.url} img_cap={photo.caption}/>
        
    {/each}
</main>

<style>
    h1{
        margin-top: 5%;
        margin-bottom: 2%;
    }

    main {
        background-color: #141e26;
        padding: 5%;
        box-shadow: var(--card-box-shadow);
        border-radius: var(--border-radius);
    }
    button{
        width: 100px;
    }
    img{
        color: white;
    }

</style>