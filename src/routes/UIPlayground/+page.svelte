<script>
	import OutButton from '$lib/UIComponents/OutButton.svelte';
	import ItemCard from '$lib/UIComponents/Card/ItemCard.svelte';
	import VCard from '$lib/UIComponents/Card/VCard.svelte';

</script>
<h1>
	UIPlayground
</h1>
<OutButton/>
<ItemCard title="Title" isShowDescription=true description="Desription"/>
<VCard title="Title" description="desc" background="images/TitleBackground1.jpg" />
<a href="/src/lib/Posts/TEST">TEST.svx</a>
<Test/>

<style>

</style>