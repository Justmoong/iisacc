
<div class="blog-container">
	<slot />
</div>

<style>
.blog-container {
		max-width: 640px;
	white-space: pre-line;
	line-height: 1.6;
	color: #e5eaf8;
	text-align: center;
}

.blog-container h1,
.blog-container h2,
.blog-container p,
.blog-container ul,
.blog-container ol,
.blog-container blockquote {
    margin-bottom: 32px;
		text-align: left;
}

</style>