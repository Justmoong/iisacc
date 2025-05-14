<script>
	import HCard from '$lib/UIComponents/HCard.svelte';
	import BlankTextBox from '$lib/UIComponents/BlankTextBox.svelte';
	import Title from '$lib/UIComponents/Title.svelte';
	import RecentPostsList from '$lib/Components/RecentPostsList.svelte';
</script>
  
  <contents>
	<Title title="IISACC" background="/images/TitleBackground1.png"/>
	<BlankTextBox text="Think and Develop For Functionality, Pragmatic Applications & Clients"/>
	<cardContainer>
	  <HCard title="Title" description="Description" isShowOutButton={false}/>
	  <a href="/UIPlayground"><HCard title="Title" description="Description" isShowOutButton={true}/></a>
	</cardContainer>


		<RecentPostsList/>

  </contents>
  
<style>
	contents {
	  display: flex;
		width: 100%;
	  flex-direction: column;
	  align-items: center;
	  margin: 0 auto;
	}

	cardContainer {
	  display: flex;
		width: 100%;
	  flex-direction: row;
	  flex-wrap: wrap;
	  justify-content: space-between;
		margin: 0 auto;
		row-gap: 64px;
	}
</style>