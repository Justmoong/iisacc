<!-- src/Card.svelte -->
<script>
  export let title = "";
  export let description = "";
</script>

<div class="cardBody">
  <div class="cardContent">
    <h3 class="cardTitle">{title}</h3>
    <p class="cardDescription">{description}</p>
  </div>
</div>

<style>
  .cardBody {
      width: 328px;
      height: 520px;
      border-radius: 32px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
      font-family: 'Pretendard', sans-serif;
      background-color: #fff;
      margin: 1rem;
      text-align: left;
    }

    .cardContent {
      padding: 32px;
    }

    .cardTitle {
      font-size: 1.25rem;
      font-weight: bold;
      color: #333;
    }

    .cardDescription {
      font-size: 0.95rem;
      color: #666;
      margin: 0;
    }
</style>
