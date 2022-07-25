<script lang="ts">
import VideoCard from "$lib/components/ui/VideoCard.svelte";
import viewport from "$lib/utils/useViewportAction";

let animate = false;
</script>

<section>
    <h1 class={animate ? "heading-animate" : ""} use:viewport
    on:enterViewport = {() => {
        animate = true;
    }}
    >ABOUT</h1>
    <p class={animate ? "text-animate" : ""}>
        Vidal was founded with the intention of creating eye-catching websites that make the visitor
        say, "woah"
    </p>
    <VideoCard title="FAST" source="../../../static/fast-keyboard.mp4" description="No one wants to wait for a website to load. Vidal uses technology that is lightening fast. Which means happy customers for you! Yay!"/>
    <VideoCard title="SEO" source="../../../static/seo-video.mp4" description="SEO is what search engines (Google, Bing, Etc.) use to see what your site is all about. Vidal's websites are built to be extremely SEO friendly."/>
    <VideoCard title="RESPONSIVE" source="../../../static/mobile-video.mp4" description="More people use their phone to surf the web than ever, having a website that works on devices of all sizes is, well, vital. Vidal has you covered."/>
</section>

<style>

    section {
        margin: 15% 0;
        grid-column: 1 / -1;
        min-height: 100vh;
    }

	h1 {
        margin: 0 5%;
        letter-spacing: var(--letter-spacing);
		font-size: 5rem;
		color: var(--text-primary);
        transform: translateX(-30%);
        opacity: 0;
        transition: all 1s ease-in-out;
        
	}
    .heading-animate {
        transform: translateX(0);
        opacity: 1;
    }
	p {
        margin: 10% 5%;
        line-height: 2;
		font-size: 2rem;
		color: var(--text-secondary);
        opacity: 0;
        transition: all 1s ease-in-out;
	}

    .text-animate {
        opacity: 1;
    }
</style>