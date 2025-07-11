<script>
	import Header from '$lib/Layouts/Header.svelte';
	import Footer from '$lib/Layouts/Footer.svelte';
</script>

<Header/>
<div class="blog-container">
	<slot />
</div>
<Footer />

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

</style>