<script lang="ts">
	import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader" 
	import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader" 
	import {AmbientLight, PointLight, PerspectiveCamera, useLoader, useFrame} from "@threlte/core";
	import {GLTF} from "@threlte/extras";

    export let totalScroll:number;

    //loading the model
	const loader = useLoader(GLTFLoader, () => new GLTFLoader());
	const dracoLoader = useLoader(DRACOLoader, () => new DRACOLoader());
	dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
	dracoLoader.setDecoderConfig({type: "js"})
	loader.setDRACOLoader(dracoLoader);



    //animation
	let spin = 0;
    
    useFrame(() => {
        spin += 0.002;
    })

</script>


<PointLight position={{x: 0, y: 1, z: 2.3}} intensity={.8}/>
<AmbientLight />
<GLTF 
    url="/phone.glb" 
    rotation={{y: spin}}
    position={{x: totalScroll * .001, y: 1.5}}
    scale={1.2}
/>
<GLTF 
    url="/laptop.glb" 
    rotation={{y: Math.sin(Math.PI * .5 * spin)}}
    scale={.8}
/>
<GLTF 
    url="/monitor.glb" 
    scale={.5}
    position={{x: -totalScroll * .001, y: -1.5}}
    rotation={{y: Math.cos(Math.PI * .5 * spin)}}
/>

<PerspectiveCamera position={{z: 5}} />