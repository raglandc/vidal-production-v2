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
    .card {
        background: var(--text-secondary);
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
    }
    
    h1 {
        color: var(--text-primary);
        margin: 0;
        padding: 1rem;
    }

    .description {
        padding: 1rem;
        flex: 1;
    }

    .meta-data {
        width: 95%;
        margin: 0 auto;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span {
        color: var(--background-color);
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: .05em;
        margin: 2em 0 0 0;
    }

    .blog-card-image {
        padding-bottom: 60%;
        background-size: cover;
        background-position: center center;
    }

    @media only screen and (min-width: 120rem) {
        .card:first-of-type {
            grid-column: 1 / span 2;
        }

        h1 {
            font-size: 2.4px;
        }

    }
</style>