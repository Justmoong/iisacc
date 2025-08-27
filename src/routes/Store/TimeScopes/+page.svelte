<script>
	import Header from '$lib/Layouts/Header.svelte';
</script>

<Header />

<div>
	<img class="appicon" src="/images/app/TimeScopesPost.png" alt="Time Scopes"/>
	<h1 class="app-name">Time Scopes</h1>
	<p>Time Scopes is a life time tracker. It shows to you remaining your lifetime and other informations</p>
	<p>We are live and you're officially invited to see what's new. Download on the App Store today. Click under button to go to App Store.</p>
	<a class="appstore" href="https://apps.apple.com/kr/app/time-scopes/id6747707757?l=en-GB
Time Scopes">
		<img class="appstore" src="/images/appstore.svg" alt="App Store"/>
	</a>
	<img class="qrcode" src="/images/app/TimeScopes-qr-code.png" alt="QR Code">
	<a class="privacy"href="/Store/TimeScopes/Privacy">Privacy policy</a>
</div>

<style>

	p{
			margin-bottom: 16px;
	}

	img {
			width: 256px;
			height: 256px;
			border-radius: 48px;
	}

	.app-name {
			text-align: center;
			margin-top: 32px;
			margin-bottom: 32px;
	}

  .qrcode {
      width: 200px;
      height: 200px;
      margin-top: 32px;
      margin-bottom: 32px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 0;
  }

  .appstore {
      width: 200px;
      height: 62px;
      margin-top: 32px;
      margin-bottom: 32px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 8px;
  }

	.privacy {
			margin-top: 32px;
	}

</style>