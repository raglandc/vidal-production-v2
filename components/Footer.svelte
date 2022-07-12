<script>
	const currentTime = new Date(Date.now());
	const currentYear = currentTime.getFullYear();
</script>

<footer>&copy; {currentYear}</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 3rem;

		margin: 2rem auto;
		padding: 2rem 1rem;
	}
</style>
