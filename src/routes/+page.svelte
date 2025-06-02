<script>
	import Header from '$lib/Layouts/Header.svelte';

</script>

<div class="contents">
	<div class="title">
		IISACC
	</div>
	<Header />
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
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 32px;
      width: 100%;
      font-size: 64px;
      font-weight: 600;
	}

  .divider {
			width: 100%;
      height: 1px;
      background-color: #fff;
      padding: 16px;
  }

</style>