<script lang="ts">
    export let src: string;
    export let alt: string;
</script>


<div>
    <img src={src} alt={alt} />
</div>


<style>
    div {
        margin: 0 auto;
    }

    img {
        width: 100%;
        height: auto;
    }
</style>