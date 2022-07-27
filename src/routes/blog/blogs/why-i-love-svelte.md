---
title: 'Three Reasons Why I Really Like Svelte'
date: '07-14-2022'
description: 'When I found React, I thought that was it. Until I tried Svelte.'
readTime: 8
url: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
---

<script>
	import BlogImage from "$lib/components/ui/BlogImage.svelte";
</script>
<br/>
<BlogImage src={url} alt="Svelte code on a computer screen"/>

# A Little Svelte History

Svelte was created in 2016 by the man, the myth, the legend, Rich Harris. At the time of creating Svelte Rich was working at the New York Times.

The name Svelte was used by Rich and his co-workers to describe their project, what was "fast" and "lean". Svelte by definition, according to Oxford Languages, is an adjective that means slender and elegant.

He has stated in several interviews that he got the idea for Svelte as a means to a problem he faced at work.

Which was creating immersive experiences for readers visiting The New York Times, without having to send that end user a massive bundle of Javascript.

# What makes Svelte Different, Is Reason #1: No virtual DOM

At the time, React, Vue, and Angular were and still are dominating the Javascript Framework ecosystem.

The latter are designed to work with a virtual DOM, in a declarative approach. This means that when you change anything on the virtual DOM, React for example, will look at what has changed and is responsible for updating the real DOM.

Svelte removed the virtual DOM completely. When you are developing, you are working with the real DOM.

Thus, when you ship your final code, everything is **compiled** into Javascript.

The final user is only given the Javascript file and that is it. Which will result in a super light file.

Which means -> faster fetching from the server -> better user experience -> happy user!

# Which Brings Me to Reason #2: Compiled

> "<em>Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.</em>"

> -<strong>svelte.dev</strong>

This style of framework results in a very light and efficient web-site/app.

In an interview, Rich Harris, stated he was not too familiar with compilers when he started working on Svelte. It was a friend, Jed Schmidt that introduced him to the idea of compiling code and turning it into something else.

Since Svelte is compiled it is technically its own language. That is how we are able to write normal HTML within Svelte files.

Instead of shipping an entire library when a user visits a site, Svelte only ships the Javascript that your user needs. This technique results in a very fast and performant website.

# And Finally Reason 3: Speed of Development

The first difference I noticed when I started building with Svelte was the change in size of my files. I initially started building my personal website with Next.js, a React framework.

I decided to switch to Svelte, just give a shot and build a few of the same components in Svelte from my React file.

The final component was around sixty percent smaller in terms of lines of code.

In addition, since I was not using styled components in my React project which means I had separate files for my styling. Svelte allows developers to write their styles in the same file as the component.

Once I experienced how awesome Svelte is, I switched completely to building my personal website entirely in Svelte. I can assure you, I do not regret this decision.

# In conclusion

I believe that Svelte has a promising future. With the new SvelteKit being put together, similar to Next.js for React, Svelte can soon be used for full blown web apps.

Rich Harris made a statement that he would rather a small amount of people who love Svelte than a large amount of people who tolerate it.

This statement tells me that the Svelte team is trying to build something fun and beautiful that developers will enjoy using. Not just another project that is taken over by corporate giants trying to squeeze every penny from a frame work.

So to Svelte Core Team and Contributors... Thank you.

# Works Cited

"Svelte Origins: A Javascript Documentary" <em> OfferZen Origins </em> June 21, 2022.
https://www.youtube.com/watch?v=kMlkCYL9qo0&t=1127s
