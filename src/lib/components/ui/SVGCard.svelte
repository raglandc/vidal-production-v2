<script>
    import viewport from "$lib/utils/useViewportAction";


    export let source = "";
    export let svgDescription = "";
    export let description = "";

    let animate = false;

</script>

<div class={animate ? "container animate" : "container" }
use:viewport
on:enterViewport = {() => animate = true}
>
    <img src={source} alt={svgDescription}/>
    <p>{description}</p>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 5% auto;
        min-height: 45px;

        opacity: 0;
        transform: translateY(100px);
        transition: all 1s ease-out;
    }

    .animate {
        transform: translateY(0);
        opacity: 1;
    }

    img {
        width: 8rem;
        height: 8rem;
    }

    p {
        padding: 0 5%;
        max-width: 80%;
        font-size: var(--font-primary-mobile);
        color: var(--text-secondary);
    }

</style>