<script lang="ts">
    import viewport from "$lib/utils/useViewportAction";
import { onMount } from "svelte";

    export let source: string;
    export let title: string;
    export let description: string;
    export let directionStyle: "Left" | "Right";

    let animate = false;
    let className: string;
    let containerName: string;

    onMount(() => {
        if(directionStyle === "Left"){
            containerName = "container-left";
            className = "animateVideoLeftIn";
        }
        else if(directionStyle === "Right") {
            containerName = "container-right";
            className = "animateVideoRightIn";
        }
    })

</script>

<div use:viewport on:enterViewport={() => animate = true} class={animate ? `${className} ${containerName}` : `${containerName}` }>
    <div class="overlay"/>
    <video autoplay muted loop>
        <source src={source} type="video/mp4" />
        Your browser does not support video tag.
    </video>
    <h2>{title}</h2>
    <p>{description}</p>
</div>

<style>
    .container-right {
        width: 100%;
        height: 50vh;
        margin: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateX(50%);
        opacity: 0;
        transition: 1s all ease-out;
    }

    .container-left {
        width: 100%;
        height: 50vh;
        margin: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateX(-50%);
        opacity: 0;
        transition: 1s all ease-out; 
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -2;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(17, 17, 17, 0.716);
        z-index: -1;
    }

    h2 {
        margin-bottom: 1rem;
        font-size: var(--font-h2-mobile);
        letter-spacing: var(--letter-spacing);
        color: var(--background-color);
    }

    p {
        font-size: var(--font-primary-mobile);
        text-align: center;
        line-height: 1.5;
        color: var(--text-secondary);
        padding: 0 2%;
    }

    .animateVideoRightIn {
        transform: translateX(0);
        opacity: 1;
    }

    .animateVideoLeftIn {
        transform: translateX(0);
        opacity: 1;
    }



    @media only screen and (min-width: 800px){
        .container-left, .container-right {
            padding: 0 10%;
        }
    }
    
    
    @media only screen and (min-width: 1200px){
        .container-left, .container-right {
            padding: 0 25%;
        }

        h2 {
            font-size: var(--font-h2-desktop);
        }

        p {
            font-size: var(--font-primary-desktop);
            padding: 0 14%;
        }
    }
</style>

