<script lang="ts">
    export let title: string;
    export let date: string;
    export let description: string;
    export let path: string;
    export let readTime: number;
</script>


<a href={path}>
<div class="card">
        <h3>
            {title}
        </h3>
        <p>{description}</p>
        <div class="meta-data">
            <span>{date}</span>
            <span>{readTime} minute read</span>
        </div>
    </div>
</a>


<style>
    .card {
        background-color: var(--text-secondary);
        width: 100%;
        margin: 1rem auto;
        border-radius: var(--border-radius);
        padding: 1rem;
    }
    .card:hover {
        transform: scale(1.01);
    }
    
    h3 {
        color: var(--text-primary);
        font-size: larger;
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
        color: var(--background-color);
    }
</style>