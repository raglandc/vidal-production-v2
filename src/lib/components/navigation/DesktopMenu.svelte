<script>
	import {page} from "$app/stores"
</script>

<div>
	<a class={$page.routeId === "" ? "active" : ""} href="/">Home</a>
	<a class={$page.routeId === "blog" ? "active" : ""} href="/blog">Blog</a>
	<a class={$page.routeId === "about" ? "active" : ""} href="/about">About</a>
</div>

<style>
	div {
		width: 100%;
		text-align: center;
		margin: 0 auto;
	}
	a {
		font-size: var(--font-secondary-desktop);
		margin: 0 0.5rem;
		padding: 0.5rem;
		text-decoration: none;
		color: var(--text-primary);
	}

	a:hover {
		border-bottom: 1px solid var(--primary-color);
	}

	.active {
		border-bottom:1px solid var(--primary-color);
	}

	@media only screen and (max-width: 699px) {
		div {
			display: none;
		}
	}
</style>
