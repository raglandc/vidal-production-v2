<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import HomePageSectionOne from '../lib/sections/HomePageSectionOne.svelte';
	import HomePageSectionTwo from '../lib/sections/HomePageSectionTwo.svelte';
	import HomePageSectionThree from '../lib/sections/HomePageSectionThree.svelte';

	let isInView: boolean;
	const options: Options = {
		rootMargin: '0px'
	};
</script>

<HomePageSectionOne />
<HomePageSectionTwo />
<HomePageSectionThree/>

<style>
	section {
		grid-column: 2 / -2;
		height: 100vh;
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
</style>
