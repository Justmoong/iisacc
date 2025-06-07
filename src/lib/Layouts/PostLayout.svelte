<script>
	import BackButton from '$lib/UIComponents/BackButton.svelte';
	import Header from '$lib/Layouts/Header.svelte';
</script>

<div class="blog-container">
	<Header/>
	<BackButton />
	<slot />
</div>

<style>
.blog-container {
	white-space: pre-line;
	line-height: 1.6;
		gap:0;
}

</style>