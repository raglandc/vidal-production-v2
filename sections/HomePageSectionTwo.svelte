<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DracoLoader.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	let isInView: boolean;
	const options: Options = {
		rootMargin: '0px'
	};

	let model: any;
	const dracoLoader = new DRACOLoader();
	const loader = new GLTFLoader();
	dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
	dracoLoader.setDecoderConfig({ type: 'js' });
	loader.setDRACOLoader(dracoLoader);

	onMount(() => {
		loader.load('../../static/phone.glb', (gltf) => {
			model = gltf;
		});
	});

	// SC.onFrame(() => {});
</script>

<section use:inview={options} on:change={(event) => console.log(event.detail.observer)}>
	<p class="three-d-span">3D</p>
	<h1>Dream</h1>
	<h1>Design</h1>
	<h1>Develop</h1>
	<p>We build fast, modern and creative websites</p>
	<p>Websites that work on any device size</p>
	{#if model}
		<div class="three-d">
			<SC.Canvas antialias alpha>
				<SC.Primitive
					scale={1.5}
					object={model.scene}
					rotation={[0, 0, Math.PI * 0.1]}
					position={[0, 0, 0]}
				/>
				<SC.PointLight position={[1, 4, 4]} />
				<SC.AmbientLight />
				<SC.PerspectiveCamera position={[0, 0, 4]} />
			</SC.Canvas>
		</div>
	{/if}
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

	section {
		position: relative;
		grid-column: 2 / -2;
		height: 100vh;
	}

	h1 {
		margin: 0.5rem;
		font-size: 5rem;
		color: var(--text-primary);
	}
	p {
		font-size: 2rem;
		color: var(--text-secondary);
	}

	.three-d-span {
		font-size: medium;
	}
</style>
