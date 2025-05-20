<script>
	export let metadata;
</script>

<div class="blog-container">
	{#if metadata?.title}
		<h1 class="blog-title">{metadata.title}</h1>
	{/if}

	{#if metadata?.date}
		<div class="blog-meta">
			<span class="blog-date">{metadata.date}</span>
			{#if metadata?.description}
				<span class="blog-desc">{metadata.description}</span>
			{/if}
		</div>
	{/if}

	<div class="blog-body svx-content">
		<slot />
	</div>
</div>

<style>
.blog-container {
	max-width: 750px;
	margin: 40px auto 0 auto;
	padding: 32px 24px;
	line-height: 1.8;
	font-size: 1.12rem;
	color: #e5eaf8;
}

.blog-title {
	font-size: 2.25rem;
	font-weight: bolder;
	margin-bottom: 1.25rem;
	letter-spacing: -0.02em;
	text-align: left;
}

.blog-meta {
	margin-bottom: 2.5rem;
	font-size: 1.05rem;
	color: #8ea0b8;
	display: flex;
	flex-wrap: wrap;
	gap: 2rem 1.5rem;
}

.blog-date {
	font-weight: 500;
}

.blog-desc {
	font-style: italic;
	opacity: 0.85;
}

/* 본문 스타일 */
.blog-body {
	width: 100%;
	margin-bottom: 40px;
	white-space: normal;
	font-size: 1.07rem;
}

/* 본문 기본 블록 요소 마진/정렬 */
.blog-body p,
.blog-body h1,
.blog-body h2,
.blog-body h3,
.blog-body h4,
.blog-body h5,
.blog-body h6,
.blog-body ul,
.blog-body ol,
.blog-body blockquote,
.blog-body pre {
	margin-left: 0;
	padding-left: 0;
	text-align: left;
}

.blog-body p {
	margin-bottom: 1.9rem;
}

.blog-body h2,
.blog-body h3 {
	margin-top: 2.5rem;
	margin-bottom: 1.25rem;
	font-weight: bold;
}
/* --- 리스트 들여쓰기: 본문 기준으로 더 깊게 --- */
.blog-body ul,
.blog-body ol {
	margin-left: 2.5rem;
	padding-left: 2rem;
	margin-bottom: 2.3rem;
}

.blog-body li {
	margin-bottom: 0.65rem;
}

/* 인용구 */
.blog-body blockquote {
	margin: 2.2rem 0 2.2rem 0;
	padding: 1.1rem 2rem;
	background: rgba(70,85,110,0.11);
	border-left: 4px solid #8ba2d6;
	border-radius: 6px;
	color: #c7daff;
	font-style: italic;
}


.blog-body pre {
	background: #1a202a;
	border-radius: 7px;
	padding: 1.1em 1.2em;
	overflow-x: auto;
	font-size: 0.98em;
	margin-top: 16px;
	margin-bottom: 2.5rem;
}

.blog-body code {
    background: #22293a;
    color: #efc090;
    padding: 2px 6px;
    border-radius: 3px;
}

.blog-body a {
	color: #61afff;
	text-decoration: underline dotted;
	transition: color 0.18s;
}
.blog-body a:hover {
	color: #ffcf7f;
}

.blog-body strong {
	font-weight: bold;
}

.blog-body em {
	font-style: italic;
}

</style>