<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DracoLoader.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

	let model: any;
	console.log(window);
	let cameraHeight: number;

	const dracoLoader = new DRACOLoader();
	const loader = new GLTFLoader();
	dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
	dracoLoader.setDecoderConfig({ type: 'js' });
	loader.setDRACOLoader(dracoLoader);

	onMount(() => {
		loader.load('../../static/section-one-scene.glb', (gltf) => {
			model = gltf;
		});
	});

	SC.onFrame(() => {
		cameraHeight = window.scrollY;
	});
</script>

<section class="section-one">
	<div>
		<h1>Vidal</h1>
		<p>A strong online presence is important</p>
		<p>These days its vital</p>
		<p>Meet Vidal</p>
	</div>
</section>
<section>
	<p class="three-d-span">3D</p>
	<h1>Dream</h1>
	<h1>Design</h1>
	<h1>Develop</h1>
	<p>We build fast, modern and creative websites</p>
	<p>Websites that work on any device size</p>
	<!-- <div class="three-d">
		<SC.Canvas antialias={true} alpha={true}>
			{#if model}
				<SC.Primitive object={model.scene} position={[0, -3, 0]} />
			{/if}
			<SC.PointLight position={[0, 0, 6]} />
			<SC.AmbientLight />
			<SC.PerspectiveCamera position={[0, 0, 10]} />
		</SC.Canvas> 
	</div> -->
</section>
<section>
	<h1>About</h1>
	<p>
		Vidal was founded with the intention of creating eye-catching websites that make the visitor
		say, "woah"
	</p>
</section>

<style>
	.three-d {
		z-index: -4;
	}

	section {
		grid-column: 2 / -2;
		height: 95vh;
	}

	.section-one {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	h1 {
		margin: 0.5rem;
		font-size: 9rem;
		color: var(--text-primary);
	}
	p {
		margin: 1rem;
		font-size: 3rem;
		color: var(--text-secondary);
	}

	.three-d-span {
		font-size: medium;
	}
</style>
