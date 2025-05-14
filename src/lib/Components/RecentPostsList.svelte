<script>
	const modules = import.meta.glob('../../posts/*.svx', { eager: true });

	const posts = Object.entries(modules)
		.map(([path, module]) => {
			const slug = path
				.split('/')
				.pop()
				.replace('.svx', '');
			return {
				slug,
				title: module.metadata.title,
				date: new Date(module.metadata.date),
				description: module.metadata.description ?? '',
			};
		})
		.sort((a, b) => b.date - a.date)
		.slice(0, 10);
</script>

<ul class="post-list">
	{#each posts as post}
		<li class="post-item">
			<a href={`/blog/${post.slug}`} class="post-link">
				<strong>{post.title}</strong>
				<span class="post-date">{post.date.toLocaleDateString()}</span>
				{#if post.description}
					<p class="post-desc">{post.description}</p>
				{/if}
			</a>
		</li>
	{/each}
</ul>

<style>
    .post-list {
        list-style: none;
        padding: 0;
        margin: 2rem 0;
    }

    .post-item {
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 1rem;
    }

    .post-link {
        text-decoration: none;
        color: inherit;
        display: block;
    }

    .post-link strong {
        font-size: 1.25rem;
    }

    .post-date {
        display: block;
        font-size: 0.875rem;
        color: #666;
    }

    .post-desc {
        font-size: 0.95rem;
        color: #444;
    }
</style>