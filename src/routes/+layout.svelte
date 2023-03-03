<script lang="ts">
    import "@picocss/pico/css/pico.min.css"
    import { collectionNamesstore } from "$lib/stores";

    let collection_names: any;
    collectionNamesstore.subscribe((names: any) => {
        collection_names = names;
    })
</script>

<main class="container">
    <slot/>

</main>
    <nav>
        <ul>
            <li><a href="/"><strong>Dad Photos</strong></a></li>
        </ul>
        <ul>
            {#each collection_names as names}
                <li><a href="/{names.slug}">{names.title}</a></li>
            {/each}
        </ul>

    </nav>


<style>
    :root {
        --primary: #43a047;
    }

    main{
        margin-bottom: 50%;
    }

    form {
        margin-top: 20%;
    }

    nav{
        position: fixed;
        bottom: 0;
        background-color: #141e26;
        width: 100%;
        padding: 10px;
    }

</style>