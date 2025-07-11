<script>
	export let title;
	export let date;
	export let path;
</script>

<article class="post-card">
	<a href={path} class="card-link">
		<img class="post-icon" src="/icons/article.svg" alt="articles" />
		<div class="post-content">
			<h3 class="post-title">{title}</h3>
			<p class="date">Posted at : {date}</p>
		</div>
	</a>
</article>

<style>
    .post-card {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 16px;
        margin-bottom: 32px;
        background: transparent;
        overflow: hidden;
    }

    .post-icon {
        width: 48px;
        height: auto;
        object-fit: contain;
        flex-shrink: 0;
    }

    .post-content {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

	.post-title {
			font-size: var(--text-subheader);
			color: var(--color-text-primary);
			font-weight: 500;
      margin-block-end: 0;
      margin-block-start: 0;
	}

	.date {
			font-size: var(--text-caption);
			color: var(--color-text-secondary);
			font-weight: 300;
      margin-block-end: 0;
      margin-block-start: 0;
	}

    .card-link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: inherit;
        gap: 16px;
    }
</style>