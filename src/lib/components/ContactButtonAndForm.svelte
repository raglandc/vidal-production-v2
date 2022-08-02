<script>
	import { fly } from 'svelte/transition';
	import InstagramLogo from 'svelte-icons/fa/FaInstagram.svelte';
	import LinkedInLogo from 'svelte-icons/fa/FaLinkedin.svelte';
	import TwitterLogo from 'svelte-icons/fa/FaTwitter.svelte';
	import GithubLogo from 'svelte-icons/fa/FaGithub.svelte';
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
			<h1>Say <span class="hi">Hi</span> 👋</h1>
			<button class="close-form-button" on:click={handleShowContact}>x</button>
		</div>
		<div class="form-content">
			<p>If you would like to follow my work or get in touch</p>
			<ul>
				<li>
					<a href="https://www.instagram.com/chris_ragland" target="_blank" rel="norefferer">
						<div class="icon">
							<InstagramLogo />
						</div>
						@chris_ragland
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/chris-ragland-42461a1b4/"
						target="_blank"
						rel="norefferer"
					>
						<div class="icon"><LinkedInLogo /></div>
						@Chris Ragland
					</a>
				</li>
				<li>
					<a href="https://www.twitter.com/@chrisragland_" target="_blank" rel="norefferer">
						<div class="icon"><TwitterLogo /></div>
						@chrisragland_
					</a>
				</li>
				<li>
					<a href="https://github.com/raglandc" target="_blank" rel="norefferer">
						<div class="icon"><GithubLogo /></div>
						@raglandc
					</a>
				</li>
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
		position: fixed;
		z-index: 2;
		top: 25%;
		border-radius: var(--border-radius);

		margin: 0 auto;
		display: grid;
		text-align: center;
		grid-template-columns: 10% repeat(4, 1fr) 10%;
		grid-template-rows: auto;
		width: 90%;
		background-color: var(--background-color);
	}

	ul {
		list-style: none;
		margin: 0 auto;
		padding: 0;
	}

	a {
		display: flex;
		align-items: center;
	}

	a:hover {
		transform: scale(1.2);
		cursor: pointer;
	}

	li {
		margin: 1rem 0;
		display: flex;
		justify-content: center;
	}

	.icon {
		margin-right: 1rem;
		width: 2.5rem;
		height: 2.5rem;
		color: var(--text-primary);
	}

	.contact-header {
		font-size: var(--font-primary-mobile);
		display: flex;
		justify-content: space-between;
		align-items: center;
		grid-column: 1/-1;
		height: max-content;
		padding:1rem 2rem 0;
		color: var(--text-primary);
		border-top-right-radius: var(--border-radius);
		border-top-left-radius: var(--border-radius);
	}

	.hi {
		color: var(--primary-color);
	}

	.form-content {
		margin: 1rem 0 2rem;
		grid-column: 2 / -2;
		line-height: 2;
		font-size: var(--font-primary-mobile);
	}

	.close-form-button {
		font-size: var(--font-primary-mobile);
		color: var(--text-primary);
		padding: 0.5rem;
		background-color: var(--background-color);
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
		.contact-header{
			font-size: var(--font-primary-desktop);
		}
		.close-form-button {
			font-size: var(--font-primary-desktop);
		}
		.contact-form-container {
			width: 40%;
		}

	}
</style>
