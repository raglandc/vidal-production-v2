<script lang="ts">
	import HomePageSceneTwo from "$lib/scenes/HomePageSceneTwo.svelte";
	import {Canvas} from "@threlte/core"
	import viewport from "$lib/utils/useViewportAction"

	let scrollY = 0;
	let sectionHeight = 0;
	let totalScroll = 0;

	$: {
		if(scrollY > sectionHeight + 10){
			totalScroll = scrollY - sectionHeight;
		}
	}

	//animation
	let animation = false;
</script>

<svelte:window bind:scrollY />

<section bind:offsetHeight={sectionHeight}>
	<p class={animation ? "text-animation three-d-span": "three-d-span"}>3D</p>
	<h1 class={animation ? "header-animation" : ""}
		style:transform = "translateX(-{totalScroll * .5}px)"
		>DREAM</h1>
	<h1 use:viewport  on:enterViewport={() => animation = true}  class={animation ? "header-animation" : ""}>DESIGN</h1>
	<h1 class={animation ? "header-animation" : ""}
		style:transform = "translateX({totalScroll * .5}px)"
			>DEVELOP
	</h1>
	<p class={animation ? "text-animation": ""}>We build fast, modern and creative websites
	</p>
	<p class={animation ? "text-animation": ""}>Websites that work on any device size</p>
	<p class={animation ? "text-animation": ""}>Mobile, laptops & desktops</p>
	<div class="three-d">
		<Canvas>
			<HomePageSceneTwo totalScroll={totalScroll}/>
		</Canvas>
	</div>
</section>

<style>
	.three-d {
		position: absolute;
		top: 0%;
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		z-index: -4;
	}

	.three-d-span {
		color: var(--primary-color);
	}

	section {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 0 5%;
		margin: 25% 0;
		grid-column: 1 / -1;
		min-height: 100vh;
	}

	h1 {
		font-size: var(--font-h1-mobile);
		letter-spacing: 15px;
		margin: 0.5rem;
		color: var(--text-primary);
		opacity: 0;
		transition: opacity 1s ease-in-out;
	}

	.header-animation {
		letter-spacing: var(--letter-spacing);
		opacity: 1;
		transform: translateY(0);
	}


	p {
		font-size: var(--font-primary-mobile);
		color: var(--text-secondary);
		margin: .5rem 0;
		opacity: 0;
		transition: all 1s ease-in-out;
	}

	.text-animation {
		opacity: 1;
	}

	@media only screen and (min-width: 750px){
		section {
			margin: 5% 0;
		}
	}
	@media only screen and (min-width: 1200px){
		h1 {
			font-size: var(--font-h1-desktop);
		}

		p {
			font-size: var(--font-primary-desktop);
		}
	}
</style>
