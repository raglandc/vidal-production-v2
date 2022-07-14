<script lang="ts">
	import { getContext, onMount } from 'svelte';
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

	let points: any;
	let ref: any;

	onMount(() => {
		loader.load('../../static/earth.glb', (gltf) => {
			model = gltf;
		});

		points = [
			{
				position: new THREE.Vector3(1.55, 0.3, -0.6),
				element: ref
			}
		];
	});

	let spin = 0;

	SC.onFrame(() => {
		// spin += 0.001;

		for (const point of points) {
			const screenPosition = point.position.clone();
		}
	});
</script>

<section class="section-one">
	<div class="text-container">
		<!-- <h1>Vidal</h1> -->
		<!-- <p>A strong online presence is important</p>
		<p>These days it's vital</p>
		<p>Meet Vidal</p> -->
	</div>
	<div bind:this={ref} class="location-point visible" />
	<div class="three-scene">
		<SC.Canvas antialias alpha>
			{#if model}
				<SC.Primitive
					scale={1.2}
					object={model.scene}
					position={[0, -1, 0]}
					rotation={[0, spin, -Math.PI * 0.15]}
				/>
			{/if}
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
</section>

<style>
	.location-point.visible {
		transform: scale(1, 1);
	}

	.location-point {
		transform: scale(0, 0);
		transition: transform 300ms;
		margin: 0;
		padding: 0;
		width: 1.6rem;
		height: 1.6rem;
		position: absolute;
		top: 51.5%;
		left: 42.2%;
		border-radius: 50%;
	}

	.location-point:before {
		animation: location-point 2.4s 2.4s ease-out;
		border: 3px solid var(--text-primary);
	}
	.location-point:after {
		animation: location-point 2.4s 1.9s ease-in;
		border: 3px solid var(--text-secondary);
	}
	.location-point:before,
	.location-point:after {
		content: '';
		width: 100%;
		height: 100%;
		display: block;
		border-radius: 50%;
		background: var(--background-color);
		opacity: 0;
		animation-iteration-count: infinite;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}

	@keyframes location-point {
		0% {
			-webkit-transform: scale(0.1, 0.1);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			-webkit-transform: scale(1.2, 1.2);
			opacity: 0;
		}
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
