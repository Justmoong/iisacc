<script>
	import Header from '$lib/Layouts/Header.svelte';
</script>

<Header/>
<div class="blog-container">
	<slot />
</div>

<style>
    :global(.blog-container) {
        align-items: left;
    }

    :global(.blog-container h1) {
        font-size: var(--text-header);
        font-weight: 400;
        padding-bottom: 24px;
    }

		:global(.blog-container p) {
				padding-bottom: 24px;
		}
</style>