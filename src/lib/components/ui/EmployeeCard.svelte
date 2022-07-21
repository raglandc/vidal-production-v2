<script lang="ts">
export let url: string;
export let description: string;
export let name: string;
export let role: string;
</script>



<div class="card">
    <div class="employee-picture" style="background-image: url({url});"/>
    <h3>{name}</h3>
    <p>{role}</p>
    <p class="description">{description}</p>
</div>  
<style>
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 45rem;
    }
    .employee-picture {
        width: 19.5rem;
        height: 19.5rem;
        border-radius: 50% 50%; 
        background-size: cover;
        background-position: center;
    }

    .description {
        text-align: center;
        color: var(--text-secondary);
        width: 80%;
        line-height: 2;
    }
</style>