<script>
	import BackButton from '$lib/UIComponents/BackButton.svelte';
</script>

<div class="blog-container">
	<BackButton />
	<slot />
</div>

<style>
.blog-container {
		max-width: 640px;
	white-space: pre-line;
	line-height: 1.6;
		gap:0;
}

</style>