<script context="module">
    import "prismjs";
    import "prismjs/themes/prism.css";
    import "prism-themes/themes/prism-vsc-dark-plus.css";
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
        <slot/>
    </article>



<style>
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-column: 2 / -2;
    }
    
    h1 {
        font-size: 4rem;
        color: var(--text-primary)
    }

article {
    color: #111;
    background: var(--text-primary);
    grid-column: 1 / -1;
    padding: 5% 5% 0 ;
    clip-path: polygon(0 8%, 100% 0, 100% 100%, 0 100%);

}


.meta-data {
    width: 90%;
    margin-bottom: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-secondary);
}


</style>