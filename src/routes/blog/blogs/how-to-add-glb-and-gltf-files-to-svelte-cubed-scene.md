---
title: 'How to add .glb/.gltf file to your Svelte Cubed scene'
date: '07-18-2022'
description: 'Learn how to add your .glb or .gltf files to your Svelte Cubed scene.'
readTime: 10
url: 'https://images.unsplash.com/photo-1655635949384-f737c5133dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
---

<script>
	import BlogWarning from "$lib/components/ui/BlogWarning.svelte"
	import BlogImage from "$lib/components/ui/BlogImage.svelte"
</script>

## Prerequisites

- A basic understanding of Svelte Cubed

- A fair understanding of Three.js

## Why Svelte Cubed?

If you are familiar with Three.js, I am assuming you are if you are reading this article, then you are aware that there is a lot of boiler plate to writing just **one** scene.

However, with the advent of tools like React-three-fiber for React and Svelte Cubed for Svelte, it is now easier than ever to comprise a Three.js scene.

<BlogWarning warning="It is important to note that at the time of writing, Svelte Cubed is still in very early development. In fact, majority of the documentation is set with 'TO-DO'."/>

so code like this...

```js
//source: https://svelte-cubed.vercel.app/docs/getting-started
import * as THREE from 'three';

function render(element) {
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(
		45,
		element.clientWidth / element.clientHeight,
		0.1,
		2000
	);

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(element.clientWidth / element.clientHeight);
	element.appendChild(renderer.domElement);

	const geometry = new THREE.BoxGeometry();
	const material = new THREE.MeshNormalMaterial();
	const box = new THREE.Mesh(geometry, material);
	scene.add(box);

	camera.position.x = 2;
	camera.position.y = 2;
	camera.position.z = 5;

	camera.lookAt(new THREE.Vector3(0, 0, 0));

	renderer.render(scene, camera);
}
```

becomes code that looks like this...

```svelte
//source: https://svelte-cubed.vercel.app/docs/getting-started
<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
</script>

<SC.Canvas>
	<SC.Mesh geometry={new THREE.BoxGeometry()} />
	<SC.PerspectiveCamera position={[1, 1, 3]} />
</SC.Canvas>
```

As you can see, this is a massive improvement for the developer.

**Thank you Rich Harris and Team.**

Not only does Svelte Cubed save us a bunch of lines of code, but compared to other alternatives that ship Three.js in its entirety, SC will "tree-shake" your project when it ships. This means that your end user only gets what they need. Which in turn, will improve the performance of your project.

While the topic does go deeper than that, that is for another article.

Just know that Svelte Cubed is pretty awesome.

<BlogImage src="https://media4.giphy.com/media/Z6f7vzq3iP6Mw/giphy.gif?cid=ecf05e47btcx7zj6pooscam9eqkvn54caaknnhvyx0tfmxud&rid=giphy.gif&ct=g" alt="Yes! That is awesome"/>

## Basic Set-Up

Lets assume that you already have your basic Svelte Cubed scene set up to some extent of the following,

```svelte
<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
</script>

<SC.Canvas antialias alpha>
	<SC.PerspectiveCamera position={[0, 0, 5]} />
	<SC.PointLight />
	<SC.AmbientLight />
</SC.Canvas>
```

To import our own model, we will need the handy-dandy loader.

So now our code becomes,

```svelte
<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DracoLoader.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
</script>

<SC.Canvas antialias alpha>
	<SC.PerspectiveCamera position={[0, 0, 5]} />
	<SC.PointLight />
	<SC.AmbientLight />
</SC.Canvas>
```

<BlogWarning warning="Note that I am using a compressed file, a .glb. If you are using a standard .gltf file you do not need the DRACOLoader()."/>

Now to load the model from the file.

Inside the script tag perform the following task,

```svelte
<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	//the loader below is for .glb files, not necessary for .gltf files
	import { DRACOLoader } from 'three/examples/jsm/loaders/DracoLoader.js';

	//creating the loaders for our model
	const dracoLoader = new DRACOLoader(); // for .glb
	const loader = new GLTFLoader();
	//the three lines below are for .glb files, if you are using a .gltf
	//you will not need this
	dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
	dracoLoader.setDecoderConfig({ type: 'js' });
	loader.setDRACOLoader(dracoLoader);
</script>

<SC.Canvas antialias alpha>
	<SC.PerspectiveCamera position={[0, 0, 5]} />
	<SC.PointLight />
	<SC.AmbientLight />
</SC.Canvas>
```

Next we will instantiate a variable that will hold our model.

```svelte
<script>
	// previous code above

	let model;

</script>

<SC.Canvas antialias alpha>
	<SC.PerspectiveCamera position={[0, 0, 5]} />
	<SC.PointLight />
	<SC.AmbientLight />
</SC.Canvas>
```

Next is the important part.

We are going to load our model when the component has mounted. Luckily for us, Svelte has a built-in function called onMount(), just for this scenario.

If you are coming from a React background, this is similar to the lifecycle function 'componentDidMount'.

Import 'onMount' from Svelte at the top of your script tag.

```svelte
<script>import {onMount} from "svelte"; /** other code below **/ </script>
```

Now we can load the model, as the component mounts.

Your code should resemble the following

```svelte
<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DracoLoader.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

	const dracoLoader = new DRACOLoader();
	const loader = new GLTFLoader();
	dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
	dracoLoader.setDecoderConfig({ type: 'js' });
	loader.setDRACOLoader(dracoLoader);

	let model;

	onMount(() => {
	loader.load(
			'the location of your .glb/.gltf, most likely in the static folder',
			(gltf) => {
				//here we assign the data to our model variable
				model = gltf;
			},
			() => {
				console.log('GLB Loading in Progress...');
			},
			(error) => {
				console.log('ERROR: ', error);
			}
		);
	});
</script>

<SC.Canvas antialias alpha>
		<SC.PerspectiveCamera position={[0, 0, 5]} />
		<SC.PointLight />
		<SC.AmbientLight />
</SC.Canvas>
```

## We are almost done!!

We have to place our model inside a SC component called SC.Primitive. This component has a prop named object that we will pass 'model.scene'.

```svelte
<SC.Canvas antialias alpha>
	<SC.PerspectiveCamera position={[0, 0, 5]} />
	<SC.PointLight />
	<SC.AmbientLight />
	//place primitive here and we pass our model as the prop
	<SC.Primitive object={model.scene} />
</SC.Canvas>
```

## But Wait...

If you tried loaded it and get an error, or just cannot see your model, there is a reason.

We need to check to see if there **IS** a model before we use it. No worries, this is actually pretty easy.

We can use Svelte's built in "If" syntax.

```svelte
<SC.Canvass antialias alpha>
	<SC.PerspectiveCamera position={[0, 0, 5]} />
	<SC.PointLight />
	<SC.AmbientLight />
	//check if the model is present before we try and use it
	{#if model}
	<SC.Primitive object={model.scene} />
	{/if}
</SC.Canvas>
```

Now bringing all of our code together it should look like the following,

## Final Code

```svelte
<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DracoLoader.js';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

	const dracoLoader = new DRACOLoader();
	const loader = new GLTFLoader();
	dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
	dracoLoader.setDecoderConfig({ type: 'js' });
	loader.setDRACOLoader(dracoLoader);

	let model;

	onMount(() => {
		loader.load(
			'The location of your .glb/.gltf file',
			(gltf) => {
				model = gltf;
			},
			() => {
				console.log('GLB Loading in Progress...');
			},
			(error) => {
				console.log('ERROR: ', error);
			}
		);
	});
</script>

<SC.Canvas antialias alpha>
	<SC.PerspectiveCamera position={[0, 0, 5]} />
	<SC.PointLight />
	<SC.AmbientLight />
	{#if model}
		<SC.Primitive
		object={model.scene}
		/>
	{/if}
</SC.Canvas>
```

If you still can not see your model, try to scale and or re-position your model. Be sure of where the origin was with respect to your model in the .glb/.gltf file.

## Conclusion

These are the steps I took to use .glb files in this website. Svelte Cubed is still very much in the projects infancy at the time of writing this article. This process may be simplified in the future. However, compared to what it would have taken in a standard three.js project this is really nice as a developer.
