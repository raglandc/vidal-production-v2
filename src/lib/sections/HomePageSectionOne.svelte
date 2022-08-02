<script lang="ts">
	import {Canvas} from "@threlte/core";
	import HomePageSceneOne from "../scenes/HomePageSceneOne.svelte";
</script>

<section >
	<div class="text-container">
		<h1><span class="V">V</span>IDAL</h1>
		<p>A strong online presence is important</p>
		<p>These days it's vital</p>
		<p>Meet Vidal</p>
	</div>
	<div class="three-scene">
		<Canvas>
			<HomePageSceneOne/>
		</Canvas>
	</div>
</section>

<style>
	.three-scene {
		position: absolute;
		top: 0%;
		right: 0%;
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		z-index: -4;
	}
	section {
		position: relative;
		grid-column: 1 / -1;
		height: 100vh;
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
	}

	.V {
		color: var(--primary-color);
	}

	.text-container {
		margin: 25% auto;
		text-align: center;
	}

	h1 {
		font-size: var(--font-h1-mobile);
		width: max-content;
		letter-spacing: var(--letter-spacing);
		margin: 0.5rem auto;
		color: var(--text-primary);
	}

	p {
		margin: .5rem 0;
		font-size: var(--font-primary-mobile);
		color: var(--text-secondary);
	}

	@media only screen and (min-width: 750px){
		.text-container {
			transform: translateY(-75%);
		}


		h1 {
			font-size: var(--font-h1-desktop);
		}

		p {
			font-size: var(--font-primary-desktop);
		}

	}
</style>
