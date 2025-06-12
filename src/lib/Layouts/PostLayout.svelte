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
    :global(.blog-container) {
        align-items: left;
    }

    :global(.blog-container h1) {
        font-size: var(--text-subtitle);
        font-weight: 500;
        padding-bottom: 24px;
    }

		:global(.blog-container p) {
				padding-bottom: 24px;
		}
</style>