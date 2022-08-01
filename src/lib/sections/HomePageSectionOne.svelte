<script lang="ts">
	import {Canvas} from "@threlte/core";
	import SceneOne from "./SceneOne.svelte";
</script>

<section >
	<div class="text-container">
		<h1>VIDAL</h1>
		<p>A strong online presence is important</p>
		<p>These days it's vital</p>
		<p>Meet Vidal</p>
	</div>
	<div class="three-scene">
		<Canvas>
			<SceneOne/>
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

	.text-container {
		margin: 25% auto;
		text-align: center;
	}

	h1 {
		letter-spacing: var(--letter-spacing);
		font-size: 7rem;
		margin: 0.5rem;
		color: var(--text-primary);
		transform: translateY(-100%);
		opacity: 0;
		transition: all 1s ease-out;
	}

	.header-animation {
		opacity: 1;
		transform: translateY(0%);
	}

	p {
		font-size: 2rem;
		color: var(--text-secondary);
		opacity: 0;
		transition: all 2s ease-out;
	}

	.text-animation {
		opacity: 1;
	}

	@media only screen and (min-width: 750px){
		
		h1 {
			font-size: 9rem;
		}
	
	}
	
	
	@media only screen and (min-width: 1200px){
		
		
		.text-container {
			transform: translateY(-70%);
		}
		
		p {
			font-size:2.5rem;
		}
	}
</style>
