<script>
	import BlankTextBox from '$lib/UIComponents/BlankTextBox.svelte';
	import Title from '$lib/UIComponents/Title.svelte';
	import Test from '$lib/Posts/Test.svx';

</script>
  
<contents>
	<Title title="IISACC"/>
	<links>
		<a href="https://www.google.com">google</a>
		<a href="https://www.google.com">google</a>
	</links>
	<BlankTextBox text="Think and develop more existential application and client development"/>
		<p>I think that the development of technological civilization should go beyond society itself and make a practical contribution to the lives of individuals. I think that technology and learning should not be the end goal, and I think deeply about increasing personal life on the physical level by optimizing survival, health, housing, environment, and fundamental human attributes.</p>
		<Test/>
</contents>
  
<style>
	contents {
	  display: flex;
		width: 100%;
	  flex-direction: column;
	  align-items: center;
		padding: 16px;
	  margin: 0 auto;
		gap: 64px;
	}

	links {
		display: flex;
		flex-direction: row;
			gap: 32px;
	}

</style>