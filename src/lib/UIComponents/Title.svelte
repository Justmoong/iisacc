<script>
	export let title = "";
	export let background = "";
</script>

<contents style={`background-image: url('${background}');`}>
	<background />
	<text>{title}</text>
</contents>

<style>
    contents {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 128px;
        width: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
        font-size: 64px;
        font-family: 'Pretendard Bold', sans-serif;
        color: var(--color-text-primary);
    }

    background {
        position: absolute;
        inset: 0;
        background-color: black;
        opacity: 0.5;
        mix-blend-mode: multiply;
        z-index: 1;
        pointer-events: none;
        display: block; /* 핵심 */
    }

    text {
        position: relative;
        z-index: 2;
        color: var(--color-text-primary);
        font-size: 64px;
        font-family: 'Pretendard Bold', sans-serif;
    }
</style>