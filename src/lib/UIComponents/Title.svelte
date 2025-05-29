<script>
	export let title = "";
	export let background = "";
</script>

<contents style={`background-image: url('${background}');`}>
	<text>{title}</text>
</contents>

<style>
    contents {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 32px;
        width: 100%;
        font-size: 64px;
				font-weight: 600;
        color: var(--color-text-primary);
    }

    text {
        position: relative;
        color: var(--color-text-primary);
        font-size: 64px;
    }
</style>