<script>
	import HCard from '$lib/UIComponents/HCard.svelte';
	import BlankTextBox from '$lib/UIComponents/BlankTextBox.svelte';
	import Title from '$lib/UIComponents/Title.svelte';
	import RecentPostsList from '$lib/Components/RecentPostsList.svelte';
</script>
  
  <contents>
	<Title title="IISACC"/>
	<BlankTextBox text="Think and Develop For Functionality, Pragmatic Applications & Clients"/>
	<cardContainer>
	  <HCard title="Title" description="Description" isShowOutButton={false}/>
	  <a href="/UIPlayground"><HCard title="Title" description="Description" isShowOutButton={true}/></a>
	  <a href="https://www.google.com"><HCard title="Title" description="Test Card to go Google" isShowOutButton={true}/></a>
	</cardContainer>


		<RecentPostsList/>

  </contents>
  
<style>
	contents {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  margin: 0 auto;
	  gap: 32px;
	}
	cardContainer {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: center;
	  gap: 1rem;
	}
</style>