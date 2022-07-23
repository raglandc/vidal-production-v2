//This is the API for our blog posts

export const GET = async () => {
	const allPostFiles = import.meta.glob('../blog/blogs/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			//this is a type error
			const { metadata } = await resolver();
			const postPath = path.slice(2, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	const sortedPosts = allPosts.sort((a, b) => {
		const result = new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
		return result;
	});

	return {
		body: sortedPosts
	};
};
