<script>
	function goBack() {
		history.back();
	}
</script>

<div class="blog-container">
	<button class="back-button" on:click={goBack}>
		&lt; back
	</button>
	<slot />
</div>

<style>
.blog-container {
		max-width: 640px;
	white-space: pre-line;
	line-height: 1.6;
}

.back-button {
	margin-top: 64px;
	font-size: var(--text-ui);
	font-weight: bold;
		color: var(--color-accent-blue);
	background: none;
	border: none;
}

.back-button:hover {
		filter: brightness(1.25);
}

</style>