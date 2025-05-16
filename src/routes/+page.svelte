<script>
	import HCard from '$lib/UIComponents/HCard.svelte';
	import BlankTextBox from '$lib/UIComponents/BlankTextBox.svelte';
	import Title from '$lib/UIComponents/Title.svelte';
	import VCard from '$lib/UIComponents/VCard.svelte';
	import CardContainer from '$lib/UIComponents/CardContainer.svelte';
	import BlogLayout from '$lib/Layouts/BlogLayout.svelte';
	import TEST from '$lib/posts/TEST.svx';
</script>
  
  <contents>
	<Title title="IISACC" background="/images/TitleBackground1.jpg"/>
	<BlankTextBox text="Think and Develop For Functionality, Pragmatic Applications & Clients"/>
	<CardContainer>
	  <HCard title="Title" description="Description" background="/images/apple-logo-WWDC.jpg" link="/posts/TEST" />
	  <HCard title="Title" description="Description" background="/images/apple-logo-WWDC.jpg" link="/UIPlayground" />
		<VCard title="Title" description="desc" background="images/apple-logo-WWDC.jpg" />
	</CardContainer>
		<BlogLayout>
			<TEST />
		</BlogLayout>

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