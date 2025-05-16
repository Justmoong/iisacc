<script>
	export let text = ""
</script>

<contents>
	<textBox>
		{text}
	</textBox>
</contents>

<style>
	contents {
		width: 100%;
		max-width: 720px;
		min-width: 320px;
		display: flex;
		justify-content: center;
	}

	textBox {
		width: 100%;
		font-size: var(--text-body);
		font-weight: 400;
		text-align: center;
		color: var(--color-text-primary);
		padding: 16px;
		line-height: 1.5;
		height: fit-content;
		word-wrap: break-word;
		overflow-wrap: break-word;
		hyphens: auto;
	}

</style>