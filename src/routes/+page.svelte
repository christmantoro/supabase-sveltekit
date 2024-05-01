<script>
	import { dummyBlogPosts } from '$lib/dummyDB';

	let posts = dummyBlogPosts;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<script src="https:cdn.tailwindcss.com"></script>
</svelte:head>

<section>
	<h1 class="mt-8 font-bold text-5xl">Blog Posts</h1>
	<div class="mt-8">
		{#each posts as post}
			<div class="mt-8 p-4 border border-gray">
				<h2 class="font-bold text-2xl">{post.title}</h2>
				<p class="mt-2">{post.date}</p>
				<p class="mt-2">{post.content}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
