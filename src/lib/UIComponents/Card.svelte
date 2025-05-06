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
      background-color: var(--color-text-disabled);
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
      color: var(--color-text-primary);
      margin-bottom: 8px;
    }

    .cardDescription {
      font-size: 0.95rem;
      color: var(--color-text-secondary);
      margin: 0;
      margin-bottom: 16px;
    }

    .buttonContainer {
      display: flex;
      justify-content: flex-end;
    }
</style>
