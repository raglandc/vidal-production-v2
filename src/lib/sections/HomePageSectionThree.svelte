<script lang="ts">

import viewport from "$lib/utils/useViewportAction";

let animate = false;

</script>

<section>
    <h1 class={animate ? "heading-animate" : ""} use:viewport
    on:enterViewport = {() => {
        animate = true;
        }}
>About</h1>
        <p class={animate ? "text-animate" : ""}>
            Vidal was founded with the intention of creating eye-catching websites that make the visitor
            say, "woah"
        </p>
</section>

<style>
    section {
		grid-column: 2 / -2;
		height: 100vh;
	}

	h1 {
		margin: 0.5rem;
		font-size: 5rem;
		color: var(--text-primary);
        transform: translateX(-30%);
        opacity: 0;
        transition: all 1s ease-in-out;
        
	}
    .heading-animate {
        transform: translateX(0);
        opacity: 1;
    }
	p {
        line-height: 2;
		font-size: 2rem;
		color: var(--text-secondary);
        opacity: 0;
        transition: all 1s ease-in-out;
	}

    .text-animate {
        opacity: 1;
    }
</style>