<script lang="ts">
export let url: string;
</script>



<div class="card">
    <div class="employee-picture" style="background-image: url({url});"/>
    <p class="description">Chris is the president of Vidal Developers</p>
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
        padding: 1rem;
    }
</style>