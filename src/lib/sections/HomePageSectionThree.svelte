<script lang="ts">
import VideoCard from "$lib/components/ui/VideoCard.svelte";
import viewport from "$lib/utils/useViewportAction";
import AboutSig from "../components/ui/aboutSig.svelte";
import SVGCard from "$lib/components/ui/SVGCard.svelte"

import svg from "/src/svg/services/services-svg.svg";
import threeDSvg from "/src/svg/services/services-3d.svg";
import backendSvg from "/src/svg/services/services-backend.svg";
import frontendSvg from "/src/svg/services/services-frontend.svg";


let animateHeader = false;
let animateDescription = false;
</script>

<section>
    <h1 class={animateHeader ? "heading-animate" : ""} use:viewport
    on:enterViewport = {() => animateHeader = true}
    >SERVICES</h1>
    <div class="video-card-container">
        <VideoCard directionStyle="Left" title="FAST" source="/video/services/fast-keyboard.mp4" description="No one wants to wait for anything to load. Vidal uses technology that is lightening fast. Which means happy customers for you! Yay!"/>
        
        <VideoCard directionStyle="Right" title="SEO" source="/video/services/seo-video.mp4" description="SEO is what search engines (Google, Bing, Etc.) use to understand what everything on the internet is about. Vidal's products are designed to be extremely SEO friendly."/>
        
        <VideoCard directionStyle="Left" title="RESPONSIVE" source="/video/services/mobile-video.mp4" description="More people use their phone to surf the web than ever, having a product that works on devices of all sizes is, well, vital. Vidal has you covered."/>
    </div>
</section>

<div class="services">
    <SVGCard 
    source={svg} svgDescription="svg file art work"
    description="Vidals designs are created in SVG files. These files can be scaled to any size without any distortion or pixalation. Perfect for your buissness logo"
    />
    <SVGCard 
    source={threeDSvg} svgDescription="the number 3 and letter D with shadows"
    description="We create 3D scenes and models. These models and scenes can be used for 3D-printing as well as creating imersive experiences on the web. Incase you need to show off your product to your customers on your website"
    />
    <SVGCard 
    source={backendSvg} svgDescription="svg file art work"
    description="Experience with different API's using Node for the majority of communication, including databases, third-party API's for authentication, ect."
    />
    <SVGCard 
    source={frontendSvg} svgDescription="svg file art work"
    description="Experience in the design and development of proffesional UI / UX. In addition to developing online immersive 2D and 3D experiences."
    />
</div>

<div class="description-container">
    <div class={animateDescription ? "description-animate description" : "description"} use:viewport on:enterViewport={() => animateDescription=true}>
        <p class="description-text">
            “Vidal's promise is to deliver high quality work that screams modern and professional. Vidal adheres to the KISS method while designing: Keep It Simple Silly.”
        </p>
        <div class="signiture-container">
            <AboutSig />
            <p class="president">President</p>
        </div>
    </div>
</div>

<style>

    section {
        overflow-x: hidden;
        margin: 15% 0 0;
        grid-column: 1 / -1;
        min-height: 110vh;
    }

    .services {
        grid-column: 2 / -2;
        display: flex;
        flex-direction: column;
    }

	h1 {
        font-size: var(--font-h1-mobile);
        letter-spacing: var(--letter-spacing);
		color: var(--text-primary);
        margin: auto 0 0 2%;
        opacity: 0;
        transition: all 1s ease-in-out;
        
	}
    .heading-animate {
        opacity: 1;
    }

    .video-card-container {
        clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
    }
    
    .description-container {
        min-height: 60vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5% auto;
        clip-path: polygon(0 13%, 100% 0, 100% 87%, 0 100%);
        background-color: var(--text-primary);
        grid-column: 1 / -1;
    }

    .description {
        font-size: var(--font-primary-mobile);
        margin: 5% auto;
        position: relative;
        border: 1px solid var(--text-secondary);
        border-radius: var(--border-radius);
        padding: 5%;
        width: 90%;
        text-align: center;
        transition: all 1s ease-out;
        opacity: 0;
    }

    .description-animate {
        opacity: 1;
    }

	.description-text {
        color: var(--background-color);
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
            margin: 10% 0 0;
        }

        .description {
            width: 70%;
            margin: 10% auto;
        }
    }

    @media only screen and (min-width: 1200px){
        h1{
            font-size: var(--font-h1-desktop);
        }

        .services {
            margin-top: 5%;
            flex-direction: row;
        }

        .description {
            font-size: var(--font-primary-desktop);
            width: 50%;
            margin: 10% auto;
        }

    }

</style>