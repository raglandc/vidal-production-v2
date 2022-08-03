<script lang="ts">
    export let title: string;
    export let date: string;
    export let description: string;
    export let path: string;
    export let readTime: number;
    export let url: string;
</script>


<a href={path}>
<div class="card">
    <div class="blog-card-image" style="background-image: url({url})"/>
        <h1>
            {title}
        </h1>
        <p class="description">{description}</p>
        <div class="meta-data">
            <span>{date}</span>
            <span>{readTime} minute read</span>
        </div>
    </div>
</a>


<style>
    /* 
    The styles for this card were edited but the majority of the work belongs to  
    John Meguerian
    https://codepen.io/jmegs/pen/opbyXg?editors=1100

    Thank you John, for your work.
    */
    .card {
        background: var(--text-primary);
        border-radius: var(--border-radius);
        text-decoration: none;
        color: #444;
        display: flex;
        flex-direction: column;
        min-height: 100%;
        position: relative;
        top: 0;
        transition: all .1s ease-in;
    }
    .card:hover {
        transform: scale(1.01);
        border: 2px solid var(--primary-color)
    }
    
    h1 {
        font-size: var(--font-h3-mobile);
        color: var(--background-color);
        margin: 0;
        padding: 1rem;
    }

    .description {
        font-size: var(--font-primary-mobile);
        margin: 0;
        padding: 1rem;
        flex: 1;
    }

    .meta-data {
        font-size: var(--font-secondary-mobile);
        width: 95%;
        margin: 0 auto;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span {
        color: var(--background-color);
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: .05em;
        margin: 2em 0 0 0;
    }

    .blog-card-image {
        padding-bottom: 60%;
        background-size: cover;
        background-position: center center;
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
    }


</style>