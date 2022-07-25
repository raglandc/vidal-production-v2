<script lang="ts">
    export let source:string;
</script>


<video autoplay muted>
    <source src={source} type="video/mp4" />
    Your browser does not support video tag.
</video>

<style>
    video {
        width: 100vw;
        height: 30%;
        object-fit: cover;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
    }
</style>

