<script>
	import Header from '$lib/Layouts/Header.svelte';
	import ItemCard from '$lib/UIComponents/Card/ItemCard.svelte'

</script>

<div class="contents">
	<div class="title">
		<div class="title-image">
			<img src="/icons/IISACC.svg" alt="IISACC.com">
		</div>
		<div class="title-text">
		IISACC
	</div>
	</div>
	<Header />
	<ItemCard image="/icons/warning.svg" title="This website is currently under work." description="This website remains at a low level of visibility and accessibility due to the absence of a finalized structural framework, and key content has yet to be integrated."
	<hr class="divider" />
	<p>
		Think and develop more existential application and client development
	</p>
		<p>I think that the development of technological civilization should go beyond society itself and make a practical contribution to the lives of individuals. I think that technology and learning should not be the end goal, and I think deeply about increasing personal life on the physical level by optimizing survival, health, housing, environment, and fundamental human attributes.</p>

</div>

<style>
	.contents {
	  display: flex;
		width: 100%;
	  flex-direction: column;
	  align-items: center;
	  margin: 0 auto;
		gap: 32px;
	}

	.title {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
	}

  .title-image img {
      width: 120px;
      height: auto;
      display: block;
  }

	.title-text {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 32px;
      width: 100%;
      font-size: 64px;
      font-weight: 600;
	}

</style>