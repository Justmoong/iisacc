<script>
	const modules = import.meta.glob('../../routes/posts/*.svx', { eager: true });

	const posts = Object.entries(modules)
		.map(([path, module]) => {
			const slug = path
				.split('/')
				.pop()
				.replace('.svx', '');

			// frontmatter에서 date를 가져와 Date 객체로 변환
			const dateString = module.metadata?.date; // 옵셔널 체이닝으로 metadata 존재 확인
			const date = dateString ? new Date(dateString) : null;

			// date가 유효하지 않으면 콘솔에 경고를 남기고 null을 반환하여 필터링되도록 할 수 있음
			// 또는 기본 날짜를 사용하거나 다른 방식으로 처리
			if (!date || isNaN(date.getTime())) {
				console.warn(`Invalid or missing date in frontmatter for ${path}. Post will be excluded or handled differently.`);
				// 여기서 null을 반환하면 아래 filter에서 걸러집니다.
				// return null;
			}

			return {
				slug,
				title: module.metadata?.title ?? '제목 없음', // title 기본값 처리
				date: date, // 유효하거나 Invalid Date 객체일 수 있음
				description: module.metadata?.description ?? '',
			};
		})
		// .filter(post => post !== null) // 위에서 null을 반환했다면 여기서 필터링
		.sort((a, b) => {
			// 유효한 날짜끼리 비교, Invalid Date는 뒤로 보내는 등의 처리
			const timeA = a.date ? a.date.getTime() : 0;
			const timeB = b.date ? b.date.getTime() : 0;

			if (isNaN(timeA) && isNaN(timeB)) return 0;
			if (isNaN(timeA)) return 1; // a의 날짜가 유효하지 않으면 뒤로
			if (isNaN(timeB)) return -1; // b의 날짜가 유효하지 않으면 뒤로

			return timeB - timeA; // 최신순 정렬
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