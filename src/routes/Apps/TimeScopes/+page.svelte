<script>
	import Header from '$lib/Layouts/Header.svelte';
	import Footer from '$lib/Layouts/Footer.svelte';
</script>

<Header />

<div>
	<img class="appicon" src="/images/app/Time%20Scopes.png" alt="Time Scopes"/>
	<h1 class="app-name">Time Scopes</h1>
	<p>Time Scopes is a life time tracker. It shows to you remaining your lifetime and other informations</p>
	<a class="appstore" href="https://apps.apple.com/kr/app/time-scopes/id6747707757?l=en-GB
Time Scopes">
		<img class="appstore" src="/images/appstore.svg" alt="App Store"/>
	</a>
	<a class="privacy"href="/Apps/TimeScopes/Privacy">Privacy policy</a>
</div>
<Footer />

<style>

	.appicon {
			margin-top: 64px;
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

	.privacy {
			margin-top: 32px;
	}

	.appstore {
			width: 256px;
			height: 80px;
			margin-top: 32px;
			margin-bottom: 32px;
			margin-left: auto;
			margin-right: auto;
			border-radius: 8px;
	}

</style>