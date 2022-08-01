<script lang="ts">
import { onMount } from "svelte";


let scrollPostion: number;
let video: HTMLVideoElement;
let videoLength:number;

onMount(() => {
    function scrollVideo() {
        scrollPostion = document.documentElement.scrollTop;
        videoLength = video.duration;
        video.currentTime = (scrollPostion / (document.documentElement.scrollHeight - window.scrollY)) * videoLength;
        console.log(video.currentTime, video.duration);
    }

    window.addEventListener("scroll", () => {
        scrollVideo();
    })

})
</script>

<section style="min-height:{video ? videoLength * 50 : "100"}vh">
    <h1>Projects</h1>
    <video bind:this={video} src="../../static/blenderAnimation.mp4">
    <track kind="captions"/>
    </video>
</section>



<style>
    section {
        position: relative;
        grid-column: 1 / -1;
    }

    h1 {
        margin: 0 10%;
        color: var(--text-primary);
    }

    video {
        position: fixed;
        top: 50%;
        left: 50%;
        min-height: 100%;
        min-width: 100%;
        width: auto;
        transform: translate(-50%, -50%);
        background-size: cover;
        z-index: -1;

    }
</style>