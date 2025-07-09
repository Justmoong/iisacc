<script>
	export let image = ""
	export let title = ""
	export let description = ""
</script>

<div class="contents">
	<div class="icon">
		<img src="{image}" alt="{title}" style="width: 64px; height: 64px;">
	</div>
	<div class="text">
		<div class="title">
			{title}
		</div>
			<div class="description">
				{description}
			</div>
	</div>
</div>

<style>

	.contents {
			max-width: 100%;
			min-width: 300px;
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 24px;
			padding-bottom: 24px;
      padding-top: 24px;
			color: var(--color-text-primary);
			gap: 32px;
			background-color: var(--color-background-secondary);
			border-radius: 36px;
  }

	.icon {
      display: flex;
      justify-content: center;
      align-items: flex-start;
	}

	.text {
      width: 100%;
      display: flex;
      flex-direction: column;
			align-items: first;
      height: 100%;
			gap: 8px;
	}

	.title {
			font-weight: semibold;
      font-size: var(--text-header);
	}

  .description {
      width: 100%;
      font-size: var(--text-caption);
      line-clamp: 2;
  }


</style>
