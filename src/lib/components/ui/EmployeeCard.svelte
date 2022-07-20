<script lang="ts">
export let url: string;
export let description: string;
export let name: string;
</script>



<div class="card">
    <div class="employee-picture" style="background-image: url({url});"/>
    <p class="description">{description}</p>
</div>  
<style>
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 40rem;
    }
    .employee-picture {
        width: 200px;
        height: 200px;
        border-radius: 50% 50%; 
        background-size: cover;
        background-position: center;
    }

    .description {
        text-align: center;
        color: var(--text-secondary);
        width: 60%;
        line-height: 2;
    }
</style>