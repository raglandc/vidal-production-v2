<script>
	import VidalLogo from '../ui/VidalLogo.svelte';
	import DesktopMenu from './DesktopMenu.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import ContactButton from '../ContactButton.svelte';
</script>

<nav>
	<!-- mobile -->
	<MobileMenu />
	<VidalLogo />
	<DesktopMenu />
	<ContactButton />
</nav>

<style>
	nav {
		margin: 1rem 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-items: center;
		align-items: center;
	}
</style>
