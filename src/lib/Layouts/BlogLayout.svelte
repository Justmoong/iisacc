
<div class="blog-container">
	<slot />
</div>

<style>
.blog-container {
	white-space: pre-line;
	line-height: 1.6;
	color: #e5eaf8;
	text-align: left;
}

.blog-container :global(h1),
.blog-container :global(h2),
.blog-container :global(p),
.blog-container :global(ul),
.blog-container :global(ol),
.blog-container :global(blockquote) {
    margin-bottom: 32px;
}

</style>