<script>
	export let text = ""
</script>

<contents>
	<div class="textBox">
		{text}
	</div>
</contents>

<style>
	contents {
		width: 100%;
		max-width: 720px;
		min-width: 320px;
		display: flex;
		justify-content: center;
	}

	.textBox {
		width: 100%;
		text-align: left;
		color: black;
		padding: 16px;
		background-color: #f8f8f8;
		border-radius: 12px;
		line-height: 1.5;
		height: fit-content;
		word-wrap: break-word;
		overflow-wrap: break-word;
		hyphens: auto;
	}

</style>