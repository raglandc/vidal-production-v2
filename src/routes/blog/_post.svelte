<script context="module">
    import "prismjs";
    import "prismjs/themes/prism.css";
    import "prism-themes/themes/prism-dracula.css";
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
            <span>{date}</span>
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
        font-size: var(--font-h1-mobile);
        margin-bottom:0;
        color: var(--text-primary)
    }
    
    article {
        font-size: var(--font-primary-mobile);
        background-color: var(--background-color);
        color: #111;
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: 5% repeat(4, 1fr) 5%;
    }

    .article-body{
        grid-column: 2 / -2;
        margin-bottom: 13%;
        line-height: 1.5;
    }

    .meta-data {
        font-size: var(--font-primary-mobile);
        width: 100%;
        margin: 5% auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: var(--text-secondary);
    }


    @media only screen and (min-width: 1200px){
        article {
            grid-template-columns: 10% repeat(12, 1fr) 10%;
        }
        .article-body {
            grid-column: 4 / -4;
        }

        header {
            padding: 5% 0 0;
            grid-column: 3 / -3;
        }

        h1 {
          font-size: var(--font-h1-desktop);
        }


    }
</style>