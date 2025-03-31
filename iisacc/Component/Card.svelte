<!-- src/Card.svelte -->
<script>
  export let title = "카드 제목";
  export let description = "카드 설명";
</script>

<div class="card">
  <div class="card-content">
    <h3 class="card-title">{title}</h3>
    <p class="card-description">{description}</p>
  </div>
</div>

<style>
  .card {
      width: 300px;
      border: 1px solid #ddd;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      font-family: 'Segoe UI', sans-serif;
      background-color: #fff;
      margin: 1rem;
    }

    .card-content {
      padding: 16px;
    }

    .card-title {
      font-size: 1.25rem;
      margin: 0 0 0.5rem 0;
      font-weight: bold;
      color: #333;
    }

    .card-description {
      font-size: 0.95rem;
      color: #666;
      margin: 0;
    }
</style>
