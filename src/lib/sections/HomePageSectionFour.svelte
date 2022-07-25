
<script>
    import EmployeeCard from "$lib/components/ui/EmployeeCard.svelte";
    import viewport from "$lib/utils/useViewportAction";

    let animatedHeader = false;
    let animatedCardOne = false;
    let animatedCardTwo = false;
    let animatedCardThree = false;

</script>

<h1 use:viewport on:enterViewport={() => {
    animatedHeader = true;
    }} class={animatedHeader ? "animated" : ""}>MEET THE TEAM</h1>
<section>
    <span use:viewport on:enterViewport={() => {
        animatedCardOne = true;
        }} class={animatedCardOne ? "card-one animated" : "card-one"}>
        <EmployeeCard role="PRESIDENT" name="Chris" description="Chris founded Vidal with the intention of building beautiful websites that demonstrate the beauty behind simplicity" url="../../static/presidentVidal.jpg" />
    </span>
    <span use:viewport on:enterViewport={() => {
        animatedCardTwo = true;
        }} class={animatedCardTwo ? "card-two animated" : "card-two"}>
        <EmployeeCard role="ENGINEER" name="Chris" description="Chris is a computer science student that enjoys waking up early, listening to music and drinking coffee while building out his imagination with code" url="../../static/engineerVidal.jpg" />
    </span>
    <span use:viewport on:enterViewport={() => {
        animatedCardThree = true;
        }} class={animatedCardThree ? "card-three animated" : "card-three"}>
        <EmployeeCard role="DESIGNER" name="Chris" description="Chris enjoys designing simple, yet beautiful layouts. Often including fibonacci ratios to appeal to the subconscious perspective" url="../../static/designerVidal.jpg" />
    </span>
</section>


<style>

    section {
     grid-column: 2 / -2;
     display: grid;
     grid-template-columns: 5% repeat(4, 1fr) 5%;
     min-height: 100vh;
    }

    span {
        opacity: 0;
        transform: translateY(25%);
        transition: all 1s ease-out;
    }

    .animated {
        opacity: 1;
        transform: translateY(0);
    }

    h1 {
        letter-spacing: var(--letter-spacing);
        font-size: 4rem;
        margin: 10% 0;
        color: var(--text-primary);
        grid-column: -1 / 1;
        text-align: center;
        opacity: 0;
        transform: translateY(25%);
        transition: all 1s ease-out;
    }

    .card-one {
        grid-column: 2 / -2;
    }

    .card-two {
        grid-column: 2 / -2;
    }

    .card-three {
        grid-column: 2 / -2;
    }


    @media only screen and (min-width: 1200px) {
        section {
            grid-template-columns: 10% repeat(12, 1fr) 10%;
            grid-gap: 2rem;
        }

        .card-one {
            grid-column: 2 / 6;
        }

        .card-two {
            grid-column: 6 / 10;
        }

        .card-three {
            grid-column: 10 / 14;
        }
    }
</style>