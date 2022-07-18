<script lang="ts">
    export let title: string;
    export let date: string;
    export let description: string;
    export let path: string;
</script>


<a href={path}>
<div class="card">
        <h3>
            {title}
        </h3>
        <p>{description}</p>
        <div class="meta-data">
            <span>{date}</span>
            <span>read time</span>
        </div>
    </div>
</a>


<style>
    .card {
        background-color: var(--text-primary);
        width: 100%;
        margin: 1rem auto;
        border-radius: var(--border-radius);
        padding: 1rem;
    }
    
    h3 {
        color: var(--background-color);
        margin: 0;
    }

    .meta-data {
        width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    span {
        color: var(--text-secondary);
    }
</style>