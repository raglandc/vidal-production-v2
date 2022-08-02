<script lang="ts">
	import {AmbientLight, PointLight, OrbitControls, PerspectiveCamera, useLoader, useFrame} from "@threlte/core";
	import {GLTF} from "@threlte/extras";

    //animation
	let spin = 0;
    
    useFrame(() => {
        spin += 0.0002;
    })

</script>

<PointLight position={{x: 0, y: .8, z: 2.3}} power={3}/>/>
<AmbientLight />
<GLTF 
dracoDecoderPath='https://www.gstatic.com/draco/v1/decoders/'
url={"/earth.glb"} 
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