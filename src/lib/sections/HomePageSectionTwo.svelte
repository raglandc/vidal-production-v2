<script lang="ts">
	import { onMount } from 'svelte';
	import * as SC from 'svelte-cubed';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DracoLoader.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import viewport from "$lib/utils/useViewportAction"

	//Model imports
	let phoneModel: any;
	let monitorModel: any;
	let laptopModel: any;
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
		);
		loader.load(
			'../../static/monitor.glb',
			(gltf) => {
				monitorModel = gltf;
			},
		);
		loader.load(
			'../../static/laptop.glb',
			(gltf) => {
				laptopModel = gltf;
			},
			);
	});



	//animation
	let spin = 0;
	let animation = false;

	SC.onFrame(() => {
		spin += 0.002;
	});
</script>

<section>
<p class={animation ? "text-animation three-d-span": "three-d-span"}>3D</p>
<h1 class={animation ? "header-animation" : ""}>DREAM</h1>
<h1 use:viewport  on:enterViewport={() => animation = true}  class={animation ? "header-animation" : ""}>DESIGN</h1>
<h1 class={animation ? "header-animation" : ""}>DEVELOP</h1>
	<p class={animation ? "text-animation": ""}>We build fast, modern and creative websites
	</p>
	<p class={animation ? "text-animation": ""}>Websites that work on any device size</p>
	<p class={animation ? "text-animation": ""}>Mobile, desktops, laptops</p>
	<div class="three-d">
		<SC.Canvas antialias alpha>
			<SC.PerspectiveCamera position={[0, 0, 4]}/>
			<SC.PointLight position={[0, 7, 1]} color="#f5f3ff"/>
			<SC.AmbientLight color="#f5f3ff"/>
			{#if phoneModel && monitorModel && laptopModel}
				<SC.Primitive
					scale={1}
					object={phoneModel.scene}
					rotation={[0, spin * 5, Math.PI * 0.1]}
					position={[0,1.2,0]}
				/>
				<SC.Primitive
					scale={0.4}
					object={monitorModel.scene}
					rotation={[0, -Math.sin(Math.PI * spin * .25), 0]}
					position={[0,0,0]}
				/>
				<SC.Primitive
					scale={0.5}
					object={laptopModel.scene}
					rotation={[0, Math.sin(Math.PI * spin * .25), 0]}
					position={[0,-1.20,0]}
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
		letter-spacing: 15px;
		margin: 0.5rem;
		font-size: 5rem;
		color: var(--text-primary);
		opacity: 0;
		transition: all 1s ease-in-out;
	}

	.header-animation {
		letter-spacing: var(--letter-spacing);
		opacity: 1;
		transform: translateY(0);
	}


	p {
		font-size: 2rem;
		margin: 1.5rem 0;
		color: var(--text-secondary);
		opacity: 0;
		transition: all 1s ease-in-out;
	}

	.three-d-span {
		font-size: medium;
	}

	.text-animation {
		opacity: 1;
	}

	@media only screen and (min-width: 750px){

		section {
			margin: 5% 0;
		}
		
		h1 {
			font-size: 9rem;
		}
	
		p {
			font-size:2.5rem;
		}
	}
</style>
