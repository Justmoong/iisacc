<script>
	import Header from '$lib/Layouts/Header.svelte';
	import Footer from '$lib/Layouts/Footer.svelte';
	import ItemCard from '$lib/UIComponents/Card/ItemCard.svelte'

</script>

<Header />
<div class="contents">
	<ItemCard image="/icons/warning.svg" title="This website is currently under work." description="This website remains at a low level of visibility and accessibility due to the absence of a finalized structural framework, and key content has yet to be integrated."/>
	<p>
		Welcome stranger, Let's think and develop more existential application and software.
	</p>
		<p>I think that the development of technological civilization should go beyond society itself and make a practical contribution to the lives of individuals. I think that technology and learning should not be the end goal, and I think deeply about increasing personal life on the physical level by optimizing survival, health, housing, environment, and fundamental human attributes.</p>


</div>
<Footer />

<style>
	.contents {
	  display: flex;
		width: 100%;
	  flex-direction: column;
	  margin: 0 auto;
		gap: 32px;
	}

</style>