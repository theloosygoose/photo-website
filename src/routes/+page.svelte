<script lang="ts">
    import PhotoCard from "./PhotoCard.svelte";
    import { collectionNamesstore } from "$lib/stores";

    export let data;
    console.log(data);

    let collection_names = data.collection_names;
    let collection_photos = data.collection_photos;

    collectionNamesstore.update(() => collection_names);


</script>

<main class="collection_card">
    {#each collection_photos as collection}
    <a href="/{collection.collection_slug}">
        <article class="collection_photos">
            <div class="photos grid">
                {#each collection.photos as photo}
                        <PhotoCard img_src={photo.url} img_cap={photo.caption}/>
                {/each}
            </div>
            <h4>{collection.collection_title}</h4>
        </article>
        
    </a>
    {/each}
</main>


<style>
    .collection_photos{
        padding-bottom:15px;

    }

    .photos{
        margin-bottom: 5%;
    }
    a:hover{
        color: blue;
        text-decoration: none;
    }

</style>