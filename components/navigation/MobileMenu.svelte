<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let showMenu = false;
	const handleClick = () => {
		showMenu = !showMenu;
	};
</script>

<div class="menu" on:click={handleClick}>
	<div class="menuSlash" />
	<div class={showMenu ? 'menuSlashActive' : 'menuSlash'} />
	<div class="menuSlash" />
</div>

{#if showMenu}
	<div class="container-side-drawer" transition:slide={{ easing: quintOut }}>
		<div class="menu-container">
			<div class="menu-header">
				<h1>Menu</h1>
				<p class="close-menu-button" on:click={handleClick}>X</p>
			</div>
			<a href="/" on:click={handleClick}>Home</a>
			<a href="/blog" on:click={handleClick}>Blog</a>
			<a href="/projects" on:click={handleClick}>Projects</a>
		</div>
	</div>
{/if}

<style>
	.menu {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.menu:hover {
		cursor: pointer;
	}

	@media only screen and (min-width: 700px) {
		.menu {
			display: none;
		}
	}
	/*menu icon*/
	.menuSlash {
		width: 2.5rem;
		height: 2px;
		background-color: var(--text-primary);
		margin: 1.5px auto;
		transition: width 0.1618s ease-out;
	}

	/* menu icon animation */
	.menuSlashActive {
		width: 2rem;
		height: 2px;
		background-color: #fff;
		margin: 1.5px auto;
		transition: width 0.1618s ease-out;
	}

	/* Side drawer styles  */

	.container-side-drawer {
		z-index: 100;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--text-primary);
		color: var(--background-color);
	}

	.menu-header {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.menu-container {
		width: 100%;
		height: 90%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	a {
		font-size: 3rem;
		text-align: center;
		width: 100%;
		padding: 1rem 0;
	}

	.close-menu-button:hover {
		cursor: pointer;
	}
</style>
