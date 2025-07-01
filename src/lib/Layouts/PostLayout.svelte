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
				max-width: 720px;
        height: auto;
        display: block;
        margin: 0 auto;
    }

    :global(.blog-container h1) {
        font-size: var(--text-header);
        font-weight: 500;
        padding-bottom: 24px;
    }

		:global(.blog-container p) {
				padding-bottom: 24px;
		}

    :global img {
        width: auto;
        max-width: 100%;
        object-fit: contain;
        display: block;
        margin: 0 auto;
    }

</style>