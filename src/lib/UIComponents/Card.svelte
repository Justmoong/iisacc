<!-- src/Card.svelte -->
<script>
  export let title = "";
  export let description = "";
  export let isShowOutButton = false;
</script>

<div class="cardBody">
  <div class="cardContent">
    <div class="textContent">
      <h3 class="cardTitle">{title}</h3>
      <p class="cardDescription">{description}</p>
    </div>
    {#if isShowOutButton}
      <div class="buttonContainer">
        <button class="outButton">></button>
      </div>
    {/if}
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
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .textContent {
      flex: 1;
    }

    .cardTitle {
      font-size: 1.25rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 8px;
    }

    .cardDescription {
      font-size: 0.95rem;
      color: #666;
      margin: 0;
      margin-bottom: 16px;
    }

    .buttonContainer {
      display: flex;
      justify-content: flex-end;
    }

    .outButton {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #f0f0f0;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
      color: #606060;
      transition: background-color 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .outButton:hover {
      background-color: #e0e0e0;
    }
</style>
