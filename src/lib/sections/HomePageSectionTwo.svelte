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
		rootMargin: '35px'
	};

	let currentHeight: number;
	//Model imports
	let phoneModel: any;
	let monitorModel: any;
	const dracoLoader = new DRACOLoader();
	const loader = new GLTFLoader();
	dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
	dracoLoader.setDecoderConfig({ type: 'js' });
	loader.setDRACOLoader(dracoLoader);

	onMount(() => {
		loader.load(
			'../../../static/phone.glb',
			(gltf) => {
				phoneModel = gltf;
			},
			() => {
				console.log('Phone model in progress...');
			},
			(error) => {
				console.log('ERROR: ', error);
			}
		);
		loader.load(
			'../../static/monitor.glb',
			(gltf) => {
				monitorModel = gltf;
			},
			() => {
				console.log('Monitor model in progress...');
			},
			(error) => {
				console.log('ERROR: ', error);
			}
		);
	});

	let spin = 0;
	SC.onFrame(() => {
		spin += 0.005;
	});
</script>

<section
	use:inview={options}
	on:change={(event) => {
		currentHeight = event.detail.entry.boundingClientRect.x;
		let currentWindowHeight = window.scrollY;
		console.log(currentHeight + currentWindowHeight);
	}}
>
	<p class="three-d-span">3D</p>
	<h1>Dream</h1>
	<h1>Design</h1>
	<h1>Develop</h1>
	<p>We build fast, modern and creative websites</p>
	<p>Websites that work on any device size</p>
	<div class="three-d">
		<SC.Canvas antialias alpha>
			<SC.PerspectiveCamera position={[0, 0, 4]} />
			<SC.PointLight position={[1, 4, 4]} />
			<SC.AmbientLight />
			{#if phoneModel && monitorModel}
				<SC.Primitive
					scale={1.5}
					object={phoneModel.scene}
					rotation={[0, spin, Math.PI * 0.1]}
					position={[0, 0, 0]}
				/>
				<SC.Primitive
					scale={0.5}
					object={monitorModel.scene}
					rotation={[0, 0, 0]}
					position={[0, -1, 0]}
				/>
			{/if}
		</SC.Canvas>
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

	section {
		position: relative;
		grid-column: 2 / -2;
		min-height: 100vh;
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
