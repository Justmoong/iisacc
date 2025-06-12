<script>
	import BackButton from '$lib/UIComponents/BackButton.svelte';
	import Header from '$lib/Layouts/Header.svelte';
</script>

<Header/>
<div class="blog-container">
	<BackButton />
	<slot />
</div>

<style>
.blog-container {
		align-items: left;
}

h1 {
		font-size: var(--text-subheader);
		font-weight: 500;
}

</style>