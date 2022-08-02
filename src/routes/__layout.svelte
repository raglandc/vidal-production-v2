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
		--background-color: #fafafa;
		--primary-color: #4f46e5;
		--secondary-color: #818cf8;
		--text-primary: #171717;
		--text-secondary: #737373;
		--button: #ddd6fe;
		--button-hover: #c4b5fd;
		--border-radius: 8px;
		--letter-spacing: 8px;
		--font-h1-mobile: 3.6rem;
		--font-h1-desktop: 6.4rem;
		--font-h2-mobile: 2.4rem;
		--font-h2-desktop: 4.26rem;
		--font-h3-mobile: 1.8rem;
		--font-h3-desktop: 2.5rem;
		--font-primary-mobile: 1.6rem;
		--font-primary-desktop: 2.1rem;
		--font-secondary-mobile: 1.2rem;
		--font-secondary-desktop: 1.6rem;
	}
	:global(html) {
		background: var(--background-color);
		overflow-x: hidden;
		position: relative;
		font-size: 62.5%;
		font-family: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
	}

	:global(body){
		margin: 0;
		padding: 0;
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
