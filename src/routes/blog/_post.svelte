<script context="module">
    import "prismjs";
    import "prismjs/themes/prism.css";
    import "prism-themes/themes/prism-atom-dark.css";
</script>

<script >

    export let title = "";
    export let date = "";
    export let readTime = 0;

</script>



    <header>
        <h1>{title}</h1>
        <div class="meta-data">
            <span>{readTime} minute read</span>
            <span>published: {date}</span>
        </div>
    </header>
    <article>
        <div class="article-body">
            <slot/>
        </div>
    </article>



<style>
    header {
        display: flex;
        flex-direction: column;
        background-color: var(--background-color);
        align-items: center;
        grid-column: 1 / -1;
        padding: 0 5%;
    }
    
    h1 {
        font-size: 4rem;
        color: var(--text-primary)
    }
    
    article {
        background-color: var(--text-primary);
        color: #111;
        grid-column: 1 / -1;
        padding: 10% 0 ;
        display: grid;
        grid-template-columns: 5% repeat(4, 1fr) 5%;
        margin: 0 0 13%;
        clip-path: polygon(0 7%, 100% 0, 100% 100%, 0 100%);
    }

    .article-body{
        grid-column: 2 / -2;
    }

    .meta-data {
        width: 90%;
        margin-bottom: 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--text-secondary);
    }


    @media only screen and (min-width: 700px){
        article {
            grid-template-columns: 10% repeat(12, 1fr) 10%;
        }
        .article-body {
            grid-column: 3 / -3;
        }
    }
</style>