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
    $: filterList = posts.filter((post: any) => post.meta.title.indexOf(searchTerm) !== -1);

    console.log(filterList);


</script>

<section>
    <h1>Blogs page</h1>
    <input bind:value={searchTerm} placeholder="Search Blogs" >
    <div>
        {#if filterList}
            {#each filterList as post} 
                <BlogPostCard description={post.meta.description} path={post.path} title={post.meta.title} date={post.meta.date}/>
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

    input {
        width: 100%;
        padding: .618rem;
        border-radius: var(--border-radius);
        border: none;
    }
</style>