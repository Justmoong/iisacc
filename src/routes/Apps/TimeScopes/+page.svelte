<script>
	import Header from '$lib/Layouts/Header.svelte';
	import Footer from '$lib/Layouts/Footer.svelte';
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
	<a class="privacy"href="/Apps/TimeScopes/Privacy">Privacy policy</a>
</div>
<Footer />

<style>

	.appicon {
			margin-top: 64px;
	}

	p{
			margin-bottom: 16px;
	}

	img {
			width: 100%;
			height: 720px;
			border-radius: 48px;
	}

	.app-name {
			margin-top: 64px;
			margin-bottom: 32px;
	}

	.privacy {
			margin-top: 32px;
			color: var(--color-text-secondary);
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

	.qrcode {
			width: 200px;
			height: 200px;
			margin-top: 32px;
			margin-bottom: 32px;
			margin-left: auto;
			margin-right: auto;
			border-radius: 0;
	}

</style>