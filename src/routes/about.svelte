<script lang="ts">

import {Canvas} from "@threlte/core"
import AboutPageScene from "$lib/scenes/about-page-scenes/AboutPageScene.svelte";

</script>


<div class="about-container">
        <h1>About</h1>
        <p>Chris was born in Indiana. During his senior year of highschool he obtained his EMT (Emergency Medical Technician) license at the age of 18 before moving to Florida at the age of 19.</p>
        <p>It was in Florida where Chris discovered his passion for writing and building with code. Compleatly changning where he thought his life was going.</p>
        <p>At the time of writing, Chris attends the University of South Florida as a Computer Science major.</p>
    </div>
    <div class="container">
    <Canvas>
        <AboutPageScene/>
    </Canvas>
</div>


<style>
    .container {
        min-height: 100vh;
        grid-column: 1 / -1;
    }

    .about-container {
        grid-column: 2 / -2;
    }

    h1 {
        font-size: var(--font-h1-mobile);
    }

    p {
        line-height: 1.5;
        font-size: var(--font-primary-mobile);
    }

    @media only screen and (min-width: 1200px){
        h1 {
            font-size: var(--font-h1-desktop);
        }

        p {
            font-size: var(--font-primary-desktop);
        }
    }

</style>