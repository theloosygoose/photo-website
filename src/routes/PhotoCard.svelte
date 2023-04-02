<script lang="ts">
    import { toggleModal } from "$lib/PhotoView/modalUtils";

    export let img_src: string;
    export let img_cap = "";
</script>

<a on:click={ toggleModal } data-tooltip="{img_cap}" data-placement="bottom" href="#">
    <img src="https://bold-fog-8666.fly.dev{img_src}" height="200" > 
</a>


<style>
    a{
        margin: auto;
    }
    img{
        width: 95%;
        object-fit: cover;
    }

    div{
        padding: 10px;
        margin: 10px;
    }

</style>