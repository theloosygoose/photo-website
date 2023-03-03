<script lang="ts">
    export let img_src: string;
    export let img_cap = "";
</script>

<a data-tooltip="{img_cap}" data-placement="top" href="#">
    <img src="http://localhost:1337{img_src}" height="200" width="300"> 
</a>


<style>
    a{
        margin: auto;
    }
    img{
        height: 300px;
        object-fit: cover;
    }

    div{
        padding: 10px;
        margin: 10px;
    }

</style>