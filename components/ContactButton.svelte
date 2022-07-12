<script>
	import { fly } from 'svelte/transition';
	let showContact = false;

	const handleShowContact = () => {
		showContact = !showContact;
		console.log(showContact);
	};
</script>

<button class="contact-button" on:click={handleShowContact}>Contact</button>

<!-- Form -->

{#if showContact}
	<div class="overlay" on:click={handleShowContact} transition:fly />
	<div class="contact-form-container" transition:fly>
		<div class="contact-header">
			<h1>Contact</h1>
			<button class="close-form-button" on:click={handleShowContact}>x</button>
		</div>
	</div>
{/if}

<style>
	.contact-button {
		border-radius: var(--border-radius);
		background-color: var(--background-color);
		padding: 0.7rem 1rem;
		color: var(--text-primary);
		border: 1px solid var(--text-primary);
	}
	.contact-button:hover {
		cursor: pointer;
	}

	/* form and overlay */
	.overlay {
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(17, 17, 17, 0.5);
	}

	.contact-form-container {
		position: absolute;
		z-index: 2;
		top: 15%;
		border-radius: var(--border-radius);

		margin: 0 auto;
		width: 90%;
		background-color: var(--text-primary);
	}

	.contact-header {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	h1 {
		color: var(--background-color);
	}

	.close-form-button {
		padding: 0.5rem;
		background-color: var(--text-primary);
		font-size: larger;
		border: none;
	}

	.close-form-button:hover {
		cursor: pointer;
	}

	@media only screen and (min-width: 700px) {
		.contact-form-container {
			width: 60%;
		}
	}

	@media only screen and (min-width: 1000px) {
		.contact-form-container {
			width: 40%;
		}
	}
</style>
