
<script>
    import EmployeeCard from "$lib/components/ui/EmployeeCard.svelte";
    import viewport from "$lib/utils/useViewportAction";

    let animatedHeader = false;
    let animatedCardOne = false;
    let animatedCardTwo = false;
    let animatedCardThree = false;

</script>

<div class="header-container" use:viewport on:enterViewport = {() => animatedHeader = true}>
    <h1 class={animatedHeader ? "meetHeader meetAnimated" : "meetHeader"}>
        MEET
    </h1>
    <h1 class={animatedHeader ? "theHeader theAnimated" : "theHeader"}>
      THE
    </h1>
    <h1 class={animatedHeader ? "teamHeader teamAnimated" : "teamHeader"}>
        TEAM
    </h1>
</div>
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
     min-height: max-content;
    }

    .header-container {
        margin: 5% 0 25%;
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: 2% repeat(6, 1fr) 2%;
        grid-template-rows: repeat(3, 1fr);
        align-items: center;
        text-align: center;
    }

    .meetHeader {
        grid-column: 2 / 5;
        transform: translateY(90%);
        opacity: 0;
        transition: 1s all ease-out;
    }

    .meetAnimated {
        transform: translateY(0);
        opacity: 1;
    }

    .theHeader {
        color: var(--text-secondary);
        grid-column: 4 / 6;
        grid-row: 2 / 3 ;
        opacity: 0;
        transition: 1s all ease-out;
    }

    .theAnimated {
        opacity: 1;
    }

    .teamHeader {
        grid-column: 5 / -2;
        grid-row: 3 / 4;
        transform: translateY(-90%);
        opacity: 0;
        transition:1s all ease-out;
    }

    .teamAnimated {
        transform: translateY(0);
        opacity: 1;
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
        font-size: var(--font-h1-mobile);
        margin: 0;
        letter-spacing: var(--letter-spacing);
        color: var(--text-primary);
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

    @media only screen and (min-width: 750px){
        .header-container {
            margin: 0 0 10%;
        }
	}

    @media only screen and (min-width: 1200px) {
        section {
            grid-template-columns: 10% repeat(12, 1fr) 10%;
            grid-gap: 2rem;
        }
        
        h1{
            font-size: var(--font-h1-desktop);
        }

        .header-container {
            grid-template-columns: 30% repeat(6, 1fr) 30%;
            margin: 0 0 5%;
        }

        .meetHeader {
            grid-column: 2 / 4;
            grid-row: 2 / 3;
        }

        .theHeader {
            grid-column: 4 / 6;
        }

        .teamHeader {
            grid-column: 6 / 8;
            grid-row: 2 / 3;
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