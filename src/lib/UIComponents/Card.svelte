<!-- src/Card.svelte -->
<script>
  import OutButton from "$lib/UIComponents/OutButton.svelte";

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
        <OutButton/>
      </div>
    {/if}
  </div>
</div>

<style>
  .cardBody {
      width: 300px;
      height: 480px;
      max-width: 320px;
      max-height: 540px;
      border-radius: 32px;
      margin: 1rem;
      font-family: 'Pretendard', sans-serif;
      text-align: left;
      background-color: #fff;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
      overflow: hidden;
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
</style>
