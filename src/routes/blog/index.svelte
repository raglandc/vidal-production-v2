<!-- Server Side Script -->
<script context="module" lang="ts">
    export const load = async ({fetch}: any) => {
        const posts = await fetch("/api/posts.json");
        const allPosts = await posts.json();

        return {
            props: {
                posts: allPosts
            }
        }
    }
</script>

<!-- Client Side Script -->
<script lang="ts">
    import BlogPostCard from "$lib/components/ui/BlogPostCard.svelte";
    export let posts: any;

    let searchTerm = "" ;

    //this is for the list when user uses search bar. 
    //for each should be looping through this list
    $: filterList = posts.filter((post: any) =>{ 
        const titleToLowercare = post.meta.title.toLowerCase();
        const searchTermToLowerCase = searchTerm.toLowerCase();

        return titleToLowercare.includes(searchTermToLowerCase)
    });

</script>

<div class="header">
    <h1>Blogs</h1>
    <p>Technical related articles</p>
</div>
<section>
    <input bind:value={searchTerm} placeholder="Search Blogs With Keywords" >
    <div class="list-of-blogs">
        {#if filterList}
            {#each filterList as post} 
                <BlogPostCard url={post.meta.url} readTime={post.meta.readTime} description={post.meta.description} path={post.path} title={post.meta.title} date={post.meta.date}/>
            {/each}
        {/if}

        {#if filterList.length === 0}
            <p>Sorry, no articles were found that match your search</p>
        {/if}
    </div>

</section>


<style>
    section {
        min-height: 100vh;
        grid-column: 2 / -2;
    }

    .list-of-blogs {
        margin: 4% auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-gap: 20px;
    }

    .header{
        color: var(--text-primary);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 15vh;
        grid-column: 1 / -1;

    }
    h1 {
        margin: 0;
    }

    input {
        width: 100%;
        padding: 1rem;
        border-radius: var(--border-radius);
        border: none;
    }

    @media only screen and (min-width: 700px) {
        .list-of-blogs{
          grid-template-columns: 1fr 1fr;
        }
    }
  
    @media only screen and (min-width: 1000px) {
        .list-of-blogs{
         grid-template-columns: repeat(3, 1fr);
        }

       .list-of-blogs:first-child {
            grid-column: 1 / span 2;
        }
    }

    @media only screen and (min-width: 1800px) {
        .list-of-blogs{
         grid-template-columns: repeat(4, 1fr);
        }

       .list-of-blogs:first-child {
            grid-column: 1 / span 2;
        }
    }
</style>