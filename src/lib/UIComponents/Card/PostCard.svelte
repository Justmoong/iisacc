<script>
	export let title;
	export let date;
	export let path;
</script>

<article class="post-card">
	<a href={path}>
	<h3 class="post-title">{title}</h3>
		<p class="date">Posted at : {date}</p>
	</a>
</article>

<style>
	.post-card {
			overflow: hidden;
			background: transparent;
			gap: 0;
			margin-bottom: 32px;
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
			font-weight: 300;
      margin-block-end: 0;
      margin-block-start: 0;
	}
</style>