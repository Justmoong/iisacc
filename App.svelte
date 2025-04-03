<script>
  import Card from './UIComponents/Card.svelte';
  import YoutubeFeed from './components/YoutubeFeed.svelte';

  let Title = 'IISACC';
  
  let videos = [
    {
      title: '최상급 4K 75인치 TV 가격이 이거밖에 안해요?: 미친 초깃값비에 골랐습니다',
      channelName: 'ITSub인성',
      views: '140K',
      timeAgo: '4 hours ago',
      duration: '16:24',
      thumbnailUrl: 'https://example.com/thumbnail1.jpg',
      isNew: true,
      isVerified: true
    },
    {
      title: 'SNS에 넘쳐나는 지브리 풍 그림... AI 붐과 시나리오의 첫 번째 정조?',
      channelName: '비디오머그',
      views: '695K',
      timeAgo: '1 day ago',
      duration: '15:33',
      thumbnailUrl: 'https://example.com/thumbnail2.jpg',
      isNew: true,
      isVerified: true
    }
  ];
</script>

<contents>
  <h1 class="HeaderTitle">{Title}</h1>
  <div class="VideoContainer">
    {#each videos as video}
      <YoutubeFeed {...video} />
    {/each}
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

  .VideoContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }
</style> 