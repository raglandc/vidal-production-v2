<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DracoLoader.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

	let model: any;
	const dracoLoader = new DRACOLoader();
	const loader = new GLTFLoader();
	dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
	dracoLoader.setDecoderConfig({ type: 'js' });
	loader.setDRACOLoader(dracoLoader);

	onMount(() => {
		loader.load('../../static/earth.glb', (gltf) => {
			model = gltf;
		});
	});

	let spin = 0;

	SC.onFrame(() => {
		spin += 0.001;
	});
</script>

<section>
	<div class="text-container">
		<h1>Vidal</h1>
		<p>A strong online presence is important</p>
		<p>These days it's vital</p>
		<p>Meet Vidal</p>
	</div>
	{#if model}
		<div class="location-point" />
		<div class="three-scene">
			<SC.Canvas antialias alpha>
				<SC.Primitive
					scale={1.2}
					object={model.scene}
					position={[0, -1, 0]}
					rotation={[0, spin, -Math.PI * 0.15]}
				/>
				<SC.PointLight position={[0, 7, 1]} />
				<SC.AmbientLight />
				<SC.PerspectiveCamera position={[0, 0, 5]} />
				<SC.OrbitControls
					enableDamping
					maxPolarAngle={Math.PI * 0.5}
					minPolarAngle={Math.PI * 0.5}
					enableZoom={false}
					enablePan={false}
					enableRotate
				/>
			</SC.Canvas>
		</div>
	{/if}
</section>

<style>
	.location-point {
	}
	.three-scene {
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
		grid-column: 1 / -1;
		height: 100vh;
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
	}

	.text-container {
		margin: 25% auto;
		text-align: center;
	}

	h1 {
		font-size: 7rem;
		margin: 0.5rem;
		color: var(--text-primary);
	}

	p {
		font-size: 2rem;
		color: var(--text-secondary);
	}
</style>
