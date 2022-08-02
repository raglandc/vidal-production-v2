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