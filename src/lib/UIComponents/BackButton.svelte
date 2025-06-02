<script>
	function goBack() {
		history.back();
	}
</script>

<button class="back-button" on:click={goBack}>
	&lt; back
</button>

<style>
    .back-button {
        margin-top: 64px;
				margin-bottom: 32px;
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