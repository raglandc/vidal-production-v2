---
title: 'What is tree shaking?'
date: '08-30-2022'
description: 'Learn what tree shaking is and why it is important for the performance of your projects.'
readTime: 3
url: 'https://benestudio.co/wp-content/uploads/2021/06/tree-shaking-1.png'
---

<script>
    import BlogBackButton from "$lib/components/ui/BlogBackButton.svelte" 
    import BlogImage from "$lib/components/ui/BlogImage.svelte" 
</script>

<br/>

<BlogImage src={url} alt="a tree with tiny red balls falling out of it."/>

# What is a tree and why should it shake?

> "<em><strong>Tree shaking</strong> is a term commonly used within a JavaScript context to describe the removal of dead code.<em>

> -<strong>MDN Web Docs</strong>

The internet has become the developers playground. This has led to the invention of some pretty incredible technology that allow designers and developers to truly express themselves in the browser.

However, while this is an incredible freedom of expression there is often a problem...

Files that are sent to the end user can be massive. Giving that user a poor experience. How? It takes time for our computers to get that information from the server somewhere in the world.

The larger the file, the more time you can expect to be waiting.

# Solution: shake that tree!

An interesting and brilliant approach to helping with this problem is tree shaking.

Before we build our final project and determine what is to be sent to the user, we shake the tree.

Ok shake the tree got it, but what does that mean?

It means that before we send the user the file we will get rid of code that is not being used.

This means that your end user is only getting files that they need. Which as you can image would lead to an improvement in application speed and user experience.

<BlogBackButton/>
