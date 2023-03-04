<script lang="ts">
    export let img_src: string;
    export let img_cap = "";
</script>

<a data-tooltip="{img_cap}" data-placement="bottom" href="#">
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
    img:hover{
        height: max-content;
    }

    div{
        padding: 10px;
        margin: 10px;
    }

</style>