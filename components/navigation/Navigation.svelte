<script>
	import VidalLogo from '../ui/VidalLogo.svelte';
	import DesktopMenu from './DesktopMenu.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import ContactButtonAndForm from '../ContactButtonAndForm.svelte';
</script>

<nav>
	<!-- mobile -->
	<MobileMenu />
	<VidalLogo />
	<DesktopMenu />
	<ContactButtonAndForm />
</nav>

<style>
	nav {
		margin: 1rem 0;
		padding: 1rem 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-items: center;
		align-items: center;
	}
</style>
