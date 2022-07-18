<script context="module">
    import "prismjs";
    import "prismjs/themes/prism.css";
    import "prism-themes/themes/prism-vsc-dark-plus.css";
</script>

<script >

    export let title = "";
    export let date = "";

</script>


<section>
    <header>
        <h1>{title}</h1>
        <p>Published: {date}</p>
    </header>
    <article>
        <slot/>
    </article>
</section>



<style>
section {
    min-height: 100vh;
    color: var(--text-primary);
    grid-column: 2 / -2;
}


</style>