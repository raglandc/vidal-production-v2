<script lang="ts">
	import {AmbientLight, PointLight, PerspectiveCamera, useFrame} from "@threlte/core";
	import {GLTF} from "@threlte/extras";

    export let totalScroll:number;

    //animation
	let spin = 0;
    
    useFrame(() => {
        spin += 0.002;
    })

</script>


<PointLight position={{x: 0, y: 1, z: 2.3}} power={3}/>
<AmbientLight />
<GLTF 
    dracoDecoderPath='https://www.gstatic.com/draco/v1/decoders/'
    url="/phone.glb" 
    rotation={{y: spin}}
    position={{x: totalScroll * .001, y: 1.5}}
    scale={1.2}
/>
<GLTF 
    dracoDecoderPath='https://www.gstatic.com/draco/v1/decoders/'
    url="/laptop.glb" 
    rotation={{y: Math.sin(Math.PI * .5 * spin)}}
    scale={.8}
/>
<GLTF 
    dracoDecoderPath='https://www.gstatic.com/draco/v1/decoders/'
    url="/monitor.glb" 
    scale={.5}
    position={{x: -totalScroll * .001, y: -1.5}}
    rotation={{y: Math.cos(Math.PI * .5 * spin)}}
/>

<PerspectiveCamera position={{z: 5}} />