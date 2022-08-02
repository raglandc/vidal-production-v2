<script lang="ts">
let time = 0;
let duration: number;

let scrollY = 0;

$: {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;

    time = duration * (scrollY / totalScroll);
}


</script>

<svelte:window bind:scrollY />

<div class="video-container">
    <video
    bind:currentTime={time}
    bind:duration
    preload="metadata"
    muted
    src="/blenderAnimation.mp4">
        <track kind="captions"/>
    </video>
</div>

<section  class="scroll-container">
    <div class="heading">
        <h1>Projects</h1>
    </div>
</section>



<style>
    .scroll-container {
        position: relative;
        height: 5000px;
        grid-column: 1 / -1;
    }

    .heading {
        position: absolute;
        top: 175px;
        width: 100%;
        text-align: center;
        color: white;
        grid-column: 2 / -2;
        color: #fff;
    }

    .heading h1 {
        font-size: var(--font-h1-mobile);
    }

    .video-container {
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: hidden;
    }
    .video-container video {
        z-index: -1;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>