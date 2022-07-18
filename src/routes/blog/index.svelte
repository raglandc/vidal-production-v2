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
</script>

<section>
    <h1>Blogs page</h1>
    <div>This will be a search bar</div>

    {#each posts as post} 
    <BlogPostCard description={post.meta.description} path={post.path} title={post.meta.title} date={post.meta.date}/>
    {/each}

</section>


<style>
    section {
        min-height: 100vh;
        grid-column: 2 / -2;
    }
</style>