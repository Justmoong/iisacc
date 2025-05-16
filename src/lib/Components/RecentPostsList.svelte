<script>
	const modules = import.meta.glob('../../routes/posts/*.svx', { eager: true });

	const posts = Object.entries(modules)
		.map(([path, module]) => {
			const slug = path
				.split('/')
				.pop()
				.replace('.svx', '');

			const dateString = module.metadata?.date;
			const date = dateString ? new Date(dateString) : null;

			if (!date || isNaN(date.getTime())) {
				console.warn(`Invalid or missing date in frontmatter for ${path}. Post will be excluded or handled differently.`);
			}

			return {
				slug,
				title: module.metadata?.title ?? '제목 없음',
				date: date,
				description: module.metadata?.description ?? '',
			};
		})

		.sort((a, b) => {
			const timeA = a.date ? a.date.getTime() : 0;
			const timeB = b.date ? b.date.getTime() : 0;

			if (isNaN(timeA) && isNaN(timeB)) return 0;
			if (isNaN(timeA)) return 1; // a의 날짜가 유효하지 않으면 뒤로
			if (isNaN(timeB)) return -1; // b의 날짜가 유효하지 않으면 뒤로

			return timeB - timeA;
		})
		.slice(0, 10);
</script>


<ul class="post-list">
	{#each posts as post}
		<li class="post-item">
			<a href={`/posts/${post.slug}`} class="post-link">
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