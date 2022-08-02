<script>
	const currentTime = new Date(Date.now());
	const currentYear = currentTime.getFullYear();
</script>

<footer>&copy; {currentYear} Vidal. All Rights Reserved </footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 30vh;
		font-size: var(--font-primary-mobile);
		margin: 2rem auto 0;
		padding: 2rem 1rem;
		background-color: var(--background-color);
		color: var(--text-primary);
	}

	@media only screen and (min-width: 1200px){
		footer {
			font-size: var(--font-primary-desktop);
		}
	}
</style>
