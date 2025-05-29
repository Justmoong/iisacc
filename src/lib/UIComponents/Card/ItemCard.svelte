<script>
	export let image = ""
	export let title = ""
	export let isShowDescription = false
	export let description = ""
</script>

<div class="contents">
	<div class="icon">
		{image}
	</div>
	<div class="text">
		<div class="title">
			{title}
		</div>
		{#if isShowDescription}
			<div class="description">
				{description}
			</div>
		{/if}
	</div>
</div>

<style>

	.contents {
			width: 1080px;
			height: 120px;
			min-width: 300px;
			display: flex;
			flex-direction: row;
			border-radius: 16px;
			background-color: #515151;
			padding: 16px;
			align-content: left;
			color: var(--color-text-primary);
	}

	.icon {
			width: 88px;
			height: 88px;
      min-width: 88px;
      min-height: 88px;
	}

	.text {
      width: 100%;
      display: flex;
      flex-direction: column;
			align-items: first;
      padding-left: 16px;
      padding-right: 16px;
      height: 100%;
			gap: 8px;
	}

	.title {
      font-family: 'Pretendard', sans-serif;
			font-weight: bold;
      font-size: 24px;
	}

	.description {
			width: 100%;
      font-family: 'Pretendard', sans-serif;
			font-weight: 600;
      font-size: 16px;
	}

</style>
