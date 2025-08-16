<script>
	import Header from '$lib/Layouts/Header.svelte';
</script>

<Header />

<div>
	<img src="/images/app/Time%20Scopes.png" alt="Time Scopes"/>
	<h1 class="app-name">Time Scopes</h1>
	<p>Time Scopes is a life time tracker. It shows to you remaining your lifetime and other informations</p>
	<a class="privacy"href="/Apps/TimeScopes/Privacy">Privacy policy</a>
</div>

<style>
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

</style>