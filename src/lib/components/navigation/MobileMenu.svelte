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
		<a href="/about" on:click={handleClick}>
			<span>About</span>
			<div class="icon">
				<CodeIcon />
			</div>
		</a>
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
		font-size: var(--font-primary-mobile);
		z-index: 100;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--background-color);
		color: var(--text-primary);
	}

	.menu-header {
		width: 100%;
		height: 8rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 3rem;
		border-bottom: 2px solid var(--text-secondary);
	}

	a {
		width: 100%;
		height: 6rem;
		padding: 0 10%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2px solid var(--text-secondary);
	}

	a:hover {
		background-color: var(--text-secondary);
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
