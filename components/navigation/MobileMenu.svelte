<script>
	import HomeIcon from 'svelte-icons/fa/FaHome.svelte';
	import PenIcon from 'svelte-icons/fa/FaPenFancy.svelte';
	import CodeIcon from 'svelte-icons/fa/FaCode.svelte';
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
			<a href="/" on:click={handleClick}
				><span>Home</span>
				<div class="icon"><HomeIcon /></div></a
			>
			<a href="/blog" on:click={handleClick}>
				<span> Blog </span>
				<div class="icon">
					<PenIcon />
				</div>
			</a>
			<a href="/projects" on:click={handleClick}>
				<span>Projects</span>
				<div class="icon">
					<CodeIcon />
				</div>
			</a>
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
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--text-primary);
		color: var(--background-color);
	}

	.menu-container {
		display: grid;
		grid-template-columns: 10% repeat(4, 1fr) 10%;
	}

	.menu-header {
		background-color: var(--background-color);
		color: var(--text-primary);
		height: 8rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		grid-column: 1 / -1;
		padding: 3rem;
	}

	a {
		height: 8rem;
		font-size: 2.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		grid-column: 2 / -2;
	}

	.icon {
		display: inline-block;
		width: 2.5rem;
		height: 2.5rem;
	}

	.close-menu-button:hover {
		cursor: pointer;
	}
</style>
