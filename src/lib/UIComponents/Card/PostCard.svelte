<script>
	export let title;
	export let image;
	export let path;
</script>

<article class="post-card">
	<a href={path}>
	<img src="{image}" alt="{title}" class="post-image" loading="lazy" />
	<h3 class="post-title">{title}</h3>
	</a>
</article>

<style>
	.post-card {
			max-width: 420px;
			overflow: hidden;
			background: transparent;
			margin: 0 auto;
	}

	.post-image {
			width: 480px;
			height: 270px;
			object-fit: cover;
			transition: all 0.3s ease-in-out;
			display: block;
	}

	.post-title {
			font-size: var(--text-header);
			color: var(--color-text-primary);
			margin: 0 auto;
			margin-bottom: 32px;
	}
</style>