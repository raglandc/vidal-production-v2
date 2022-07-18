<script>
	import Navigation from '../lib/components/navigation/Navigation.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<Navigation />

<main>
	<slot><p>Loading...</p></slot>
</main>

<Footer />

<style>
	:root {
		--background-color: #4c1d95;
		--text-primary: #f5f3ff;
		--text-secondary: #a78bfa;
		--button: #ddd6fe;
		--button-hover: #c4b5fd;
		--border-radius: 8px;
	}
	:global(html) {
		position: relative;
		font-size: 62.5%;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
			Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}
	:global(body) {
		font-size: 1.6rem;
		margin: 0;
		padding: 0;
		background: var(--background-color);
	}
	:global(a) {
		text-decoration: none;
		color: inherit;
	}
	:global(*) {
		box-sizing: border-box;
	}

	main {
		display: grid;
		grid-template-columns: 5% repeat(4, 1fr) 5%;
	}

	@media only screen and (min-width: 700px) {
		main {
			grid-template-columns: 10% repeat(12, 1fr) 10%;
		}
	}
</style>
