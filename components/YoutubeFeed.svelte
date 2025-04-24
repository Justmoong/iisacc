<script>
  export let title = '';
  export let channelName = '';
  export let views = '';
  export let timeAgo = '';
  export let duration = '';
  export let thumbnailUrl = '';
  export let isNew = false;
  export let isVerified = false;
  export let isShowOutButton = false;
</script>

<div class="video-card">
  <div class="thumbnail-container">
    <img src={thumbnailUrl} alt={title} class="thumbnail"/>
    <div class="duration">{duration}</div>
  </div>
  <div class="video-info">
    <h3 class="title">{title}</h3>
    <div class="channel-info">
      <span class="channel-name">{channelName}</span>
      {#if isVerified}
        <span class="verified-badge">✓</span>
      {/if}
    </div>
    <div class="meta-info">
      <span>{views} views</span>
      <span class="dot">•</span>
      <span>{timeAgo}</span>
      {#if isNew}
        <span class="new-badge">New</span>
      {/if}
    </div>
    {#if isShowOutButton}
      <button class="out-button">외부 링크</button>
    {/if}
  </div>
</div>

<style>
  // ... existing code ...

  .out-button {
    margin-top: 8px;
    padding: 6px 12px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    color: #606060;
  }

  .out-button:hover {
    background-color: #e0e0e0;
  }
</style> 