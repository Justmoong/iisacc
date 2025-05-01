<script>
	import Card from '$lib/UIComponents/Card.svelte';
	import BlankTextBox from '$lib/UIComponents/BlankTextBox.svelte';
	import Title from '$lib/UIComponents/Title.svelte';
</script>
  
  <contents>
	<Title title="IISACC"/>
	<BlankTextBox text="Hello, World!"/>
	<div class="CardContainer">
	  <Card title="Title" description="Description" isShowOutButton={false}/>
	  <a href="/UIPlayground"><Card title="Title" description="Description" isShowOutButton={true}/></a>
	  <a href="https://www.google.com"><Card title="Title" description="Test Card to go Google" isShowOutButton={true}/></a>

	</div>

  </contents>
  
  <style>
	contents {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  margin: 0 auto;
	  gap: 32px;
	}
	.CardContainer {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: center;
	  gap: 1rem;
	}
  </style>