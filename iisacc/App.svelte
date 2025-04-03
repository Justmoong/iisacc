<script>
  import Card from './UIComponents/Card.svelte';
  let Title = 'IISACC';
</script>

<contents>
  <h1 class="HeaderTitle">{Title}</h1>
  <div class="CardContainer">
    <Card title="Title" description="Description" />
    <Card title="Title" description="Description" />
    <a href="https://www.google.com"><Card title="Title" description="Description" /></a>
  </div>
</contents>

<style>
  contents {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  .HeaderTitle {
	font-family: 'Pretendard Bold', sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 0;
  }

  .CardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
</style> 