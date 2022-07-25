<script lang="ts">
import VideoCard from "$lib/components/ui/VideoCard.svelte";
import viewport from "$lib/utils/useViewportAction";
import Signiture from "../../../static/aboutSig.svelte"

let animateHeader = false;
let animateDescription = false;
</script>

<section>
    <h1 class={animateHeader ? "heading-animate" : ""} use:viewport
    on:enterViewport = {() => animateHeader = true}
    >ABOUT</h1>
    <VideoCard title="FAST" source="../../../static/fast-keyboard.mp4" description="No one wants to wait for a website to load. Vidal uses technology that is lightening fast. Which means happy customers for you! Yay!"/>
    <VideoCard title="SEO" source="../../../static/seo-video.mp4" description="SEO is what search engines (Google, Bing, Etc.) use to see what your site is all about. Vidal's websites are built to be extremely SEO friendly."/>
    <VideoCard title="RESPONSIVE" source="../../../static/mobile-video.mp4" description="More people use their phone to surf the web than ever, having a website that works on devices of all sizes is, well, vital. Vidal has you covered."/>
    <div class={animateDescription ? "description-animate description" : "description"} use:viewport on:enterViewport={() => animateDescription=true}>
        <p class="description-text">
            “Vidal's promise is to deliver high quality websites that scream modern and professional. Vidal adheres to the KISS method while designing: Keep It Simple Stupid.”
        </p>
        <div class="signiture-container">
            <Signiture />
            <p class="president">President</p>
        </div>
    </div>
</section>

<style>

    section {
        margin: 15% 0;
        grid-column: 1 / -1;
        min-height: 100vh;
    }

	h1 {
        text-align: center;
        margin: 10% 5%;
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
    .description {
        position: relative;
        margin: 30% auto;
        border: 1px solid var(--text-secondary);
        border-radius: var(--border-radius);
        padding: 5%;
        font-size: 2rem;
        width: 90%;
        text-align: center;
        transition: all 1s ease-in-out;
        opacity: 0;
    }

    .description-animate {
        opacity: 1;
    }

	.description-text {
        color: var(--text-primary);
        margin-top: 0;
        line-height: 2;
	}

    .signiture-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: -40px;
        right: -15px;
        width: max-content;
        height: 25%;
        padding: .5rem 1rem;
        background-color: var(--background-color);
        border: 1px solid var(--text-secondary);
        border-radius: var(--border-radius);
        color: var(--text-primary);
    }

    .president {
        padding: 0 1rem;
        margin: 0;
        border-left: 1px solid var(--text-primary);
    }

    @media only screen and (min-width: 800px){
        section {
            margin: 10% 0;
        }

        .description {
            width: 70%;
            margin: 5% auto;
        }
    }

</style>