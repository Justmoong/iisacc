<script>
	export let title;
	export let image;
	export let path;
</script>

<article class="post-card">
	<a href={path}>
	<img src="{image}" alt="{title}" class="post-image" loading="lazy" />
	<h2 class="post-title">{title}</h2>
	</a>
</article>

<style>
	.post-card {
			max-width: 420px;
			overflow: hidden;
			background: transparent;
			margin: 0 auto;
	}

	.post-card:hover {
			box-shadow: 0 0 10px rgba(0,0,0,0.1);
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
	}
</style>