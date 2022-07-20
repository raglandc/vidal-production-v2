
<script>
    import EmployeeCard from "$lib/components/ui/EmployeeCard.svelte";
</script>

<section>
    <span class="card-one">
        <EmployeeCard url="../../static/presidentVidal.jpg" />
    </span>
</section>


<style>

    section {
     grid-column: 2 / -2;
     display: grid;
     grid-template-columns: 5% repeat(4, 1fr) 5%;
    }

    .card-one {
        grid-column: 2 / -2;
    }

</style>