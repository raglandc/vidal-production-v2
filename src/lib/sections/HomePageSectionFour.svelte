
<script>
    import EmployeeCard from "$lib/components/ui/EmployeeCard.svelte";
</script>

<h1>Meet the team</h1>
<section>
    <span class="card-one">
        <EmployeeCard role="President" name="Chris" description="Chris founded Vidal with the intention of building beautiful websites that demonstrate the beauty behind simplicity" url="../../static/presidentVidal.jpg" />
    </span>
</section>


<style>

    section {
     grid-column: 2 / -2;
     display: grid;
     grid-template-columns: 5% repeat(4, 1fr) 5%;
    }

    h1 {
        font-size: 4rem;
        margin: 10% 0;
        color: var(--text-primary);
        grid-column: -1 / 1;
        text-align: center;
    }

    .card-one {
        grid-column: 2 / -2;
    }


    @media only screen and (min-width: 1600px) {
        section {
            grid-template-columns: 10% repeat(12, 1fr) 10%;
            grid-gap: 2rem;
        }

        .card-one {
            grid-column: 2 / 6;
        }
    }
</style>