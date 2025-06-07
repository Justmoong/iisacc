<script>
	import PostCard from '$lib/UIComponents/Card/PostCard.svelte';
	import BackButton from '$lib/UIComponents/BackButton.svelte';
	import Header from '$lib/Layouts/Header.svelte';
</script>

<div class="posts-container">
	<Header />
<BackButton/>
<PostCard
	title="The Illusion of Professional Activity"
	image="/images/TitleBackground1.jpg"
	path="/Posts/The Illusion of Professional Activity"
	/>
<PostCard
	title="Can Trump realize MAGA?"
	image="/images/MAGA-symbol.jpg"
	path="/Posts/Can Trump realize MAGA"
	/>
</div>

<style>
	.posts-container {
			flex-direction: column;
			align-items: left;
		justify-content: left;
	}

</style>