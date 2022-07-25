<script lang="ts">
import VideoCard from "$lib/components/ui/VideoCard.svelte";
import viewport from "$lib/utils/useViewportAction";

let animate = false;
</script>

<section>
    <h1 class={animate ? "heading-animate" : ""} use:viewport
    on:enterViewport = {() => {
        animate = true;
        }}
    >ABOUT</h1>
    
    <p class={animate ? "text-animate" : ""}>
        Vidal was founded with the intention of creating eye-catching websites that make the visitor
        say, "woah"
    </p>

    <div>
        <VideoCard source="https://image.mux.com/X2BJAUZg3MJUXUMntcewWmJijDxt64e8/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJ3aWR0aCI6NjQwLCJ0aW1lIjowLCJleHAiOjMxNzE5MjI1MTMwOCwiYXVkIjoidCIsInN1YiI6IlgyQkpBVVpnM01KVVhVTW50Y2V3V21KaWpEeHQ2NGU4In0.lL0JSDU10mOihW4TQY5AQxF1z0ss_jn-daTztr3M18xD0z5HVCxw7x4XwB6OiC5IV2X8koJbDj-PFzr-AxwiG0Fn7hGXw9ddTaYmlv9VBE8b78KZH7e8CuJTSCtYSGQFlFWU2pcWkytd8seSdNE_slknW5g33AFuDTHD2yq-RRqygLPQl-7-ojSUjW2mi7kxLt9q8woeGRFL77uMHXE-OExT02ujHkell8xvWYAJtCIyvdKFODSquOCysnNiw4iQ8n9AoF143XXs3KEvtPq-a6B993tTIQUgKNFcn1q83it2Uaok1Pre38MWKgl7yI69rBz4YU2sLS8F9HACj7Vj7A"/>
    </div>
</section>

<style>
    section {
		grid-column: 2 / -2;
        margin: 10% auto;
		min-height: 100vh;
	}

    div {
        grid-column: 1 / -1;
    }

	h1 {
        letter-spacing: var(--letter-spacing);
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