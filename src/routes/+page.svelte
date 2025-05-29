<script>
	import HCard from '$lib/UIComponents/Card/HCard.svelte';
	import BlankTextBox from '$lib/UIComponents/BlankTextBox.svelte';
	import Title from '$lib/UIComponents/Title.svelte';
	import VCard from '$lib/UIComponents/Card/VCard.svelte';
	import CardContainer from '$lib/UIComponents/Card/CardContainer.svelte';
	import RecentPostsList from '$lib/Components/RecentPostsList.svelte';
	import P2PFoundationLink from '$lib/Utils/P2PFoundationLink.svelte';
	import Test from '$lib/Posts/Test.svx';

</script>
  
  <contents>
	<Title title="IISACC" background="/images/TitleBackground1.jpg"/>
	<BlankTextBox text="Think and develop more existential application and client development"/>
		<p>I think that the development of technological civilization should go beyond society itself and make a practical contribution to the lives of individuals. I think that technology and learning should not be the end goal, and I think deeply about increasing personal life on the physical level by optimizing survival, health, housing, environment, and fundamental human attributes.</p>
		<Test/>
		<Test/>

	<RecentPostsList />
	<P2PFoundationLink />

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

</style>