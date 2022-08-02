<script lang="ts">
	import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader" 
	import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader" 
	import {AmbientLight, PointLight, OrbitControls, PerspectiveCamera, useLoader, useFrame} from "@threlte/core";
	import {GLTF} from "@threlte/extras";

    //loading the model
	const loader = useLoader(GLTFLoader, () => new GLTFLoader());
	const dracoLoader = useLoader(DRACOLoader, () => new DRACOLoader());
	dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
	dracoLoader.setDecoderConfig({type: "js"})
	loader.setDRACOLoader(dracoLoader);

    //animation
	let spin = 0;
    
    useFrame(() => {
        spin += 0.0002;
    })

</script>

<PointLight position={{x: 1, y: 1, z: 2.3}} />
<AmbientLight />
<GLTF 
url="/earth.glb" 
rotation={{x:0, y: spin, z: -Math.PI * .18}}
position={{y: -1}}
/>
<PerspectiveCamera position={{z: 5}}>
    <OrbitControls 
    enableDamping 
    enableZoom={false} 
    maxPolarAngle={Math.PI * .5}
    minPolarAngle={Math.PI * .5}
    />
</PerspectiveCamera>


<style>

    .location-point.visible {
		transform: scale(1, 1);
	}

	.location-point {
		transform: scale(0, 0);
		transition: transform 300ms;
		margin: 0;
		padding: 0;
		width: .618rem;
		height: .618rem;
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
			-webkit-transform: scale(1, 1);
			 opacity: 0;
		}
	}

</style>