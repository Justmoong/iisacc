<script>

</script>

<div class="svx-prose">
	<slot />
</div>

<style>
    :global(.svx-prose :deep(h1)),
    :global(.svx-prose :deep(p)),
    :global(.svx-prose :deep(ul)),
    :global(.svx-prose :deep(li)),
    :global(.svx-prose :deep(code)),
    :global(.svx-prose :deep(a)) {
        color: var(--color-text-primary);
        font-size: inherit;
        line-height: 1.6;
    }
</style>