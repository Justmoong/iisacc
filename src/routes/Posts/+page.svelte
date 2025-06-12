<script>
	import PostCard from '$lib/UIComponents/Card/PostCard.svelte';
	import BackButton from '$lib/UIComponents/BackButton.svelte';
	import Header from '$lib/Layouts/Header.svelte';
</script>


<Header />
<div class="posts-container">
	<BackButton/>
<PostCard
	title="The paradox of technological progress"
	date="2025-06-12"
	path="/Posts/The paradox of technological progress"
/>
<PostCard
	title="Can Trump realize MAGA?"
	date="2025-06-01"
	path="/Posts/Can Trump realize MAGA"
/>
<PostCard
	title="The Illusion of Professional Activity"
	date="2025-05-28"
	path="/Posts/The Illusion of Professional Activity"
/>

</div>

<style>
	.posts-container {
			flex-direction: column;
			align-items: left;
	}

</style>