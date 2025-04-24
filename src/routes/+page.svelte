<script>
	import Card from '$lib/UIComponents/Card.svelte';
	import BlankTextBox from '$lib/UIComponents/BlankTextBox.svelte';
	let Title = 'IISACC';
  </script>
  
  <contents>
	<h1 class="HeaderTitle">{Title}</h1>
	<BlankTextBox text="Hello, World!"/>
	<div class="CardContainer">
	  <Card title="Title" description="Description" isShowOutButton={false}/>
	  <a href="/TestPage"><Card title="Title" description="Description" isShowOutButton={false}/></a>
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
  
	.HeaderTitle {
	  font-family: 'Pretendard Bold', sans-serif;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  padding-top: 128px;
	}
  
	.CardContainer {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: center;
	  gap: 1rem;
	}
  </style> 