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
		<div class="form-content">
			<p>Hey, if you like what you see and would like to work together, feel free to reach out.</p>
			<ul>
				<li>Email: chrisragland97@gmail.com</li>
				<li>Instagram: @chris_ragland</li>
				<li>LinkedIn: @chrisragland_</li>
				<li>Twitter: @chrisragland_</li>
				<li>Github: @raglandc</li>
			</ul>
		</div>
	</div>
{/if}

<style>
	@keyframes rotate {
		to {
			--angle: 360deg;
		}
	}

	@property --angle {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}

	.contact-button {
		background-color: var(--background-color);
		padding: 0.7rem 1rem;
		color: var(--text-primary);

		border: 2px solid;
		border-image-slice: 1;
		border-width: 2px;
		border-image-source: conic-gradient(from var(--angle), #8b5cf6, #db2777, #f5f3ff);
		animation: 4s rotate linear infinite;
	}
	.contact-button:hover {
		cursor: pointer;
		transform: scale(1.05);
		border-image-source: conic-gradient(from var(--angle), #f43f5e, #e11d48, #fff1f2);
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

	.form-content {
		margin: 0 auto;
		width: 90%;
		line-height: 1.5;
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
