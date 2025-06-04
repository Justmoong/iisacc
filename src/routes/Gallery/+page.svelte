<script>
	const imageList = [];
</script>

<div class="photo-grid">
	{#each imageList as src}
		<img src={src} alt="photo" class="photo"/>
	{/each}
</div>

<style>
    .photo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        padding: 16px;
    }

    .photo {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    }
</style>