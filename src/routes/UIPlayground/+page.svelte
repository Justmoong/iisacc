<script>
	import OutButton from '$lib/UIComponents/OutButton.svelte';
	import ItemCard from '$lib/UIComponents/ItemCard.svelte';

	import TEST from '$lib/posts/TEST.svx';
	import VCard from '$lib/UIComponents/VCard.svelte';

</script>
<h1>
	UIPlayground
</h1>
<OutButton/>
<ItemCard title="Title" isShowDescription=true description="Desription"/>
<TEST />
<VCard title="Title" description="desc" background="images/TitleBackground1.jpg" />

<style>

</style>