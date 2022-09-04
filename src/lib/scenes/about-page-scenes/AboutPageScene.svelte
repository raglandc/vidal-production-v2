<script lang="ts">
	import {AmbientLight, PerspectiveCamera, OrbitControls} from "@threlte/core";
	import {GLTF} from "@threlte/extras";
</script>


<AmbientLight />
<PerspectiveCamera position={{y: 5, z: 40}}>
<OrbitControls
minPolarAngle={Math.PI / 4}
maxPolarAngle={Math.PI * .4}
maxAzimuthAngle={Math.PI}
enableZoom={false}
enableDamping
/>
</PerspectiveCamera>
<GLTF 
    dracoDecoderPath='https://www.gstatic.com/draco/v1/decoders/'
    url="/models/aboutpage/about.glb" 
    scale={.62}
/>

