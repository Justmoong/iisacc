<script>
	import Header from '$lib/Layouts/Header.svelte';
	import Footer from '$lib/Layouts/Footer.svelte';
</script>

<Header/>

<div class="TimeScopes">
	<a href="/Apps/TimeScopes">
		<img src="/images/app/Time%20Scopes.png" class="appicon" alt="Time Scopes"/>
		<div class="appinfo">
			<h2>Time Scopes</h2>
			<img src="/icons/apple.svg" class="platform" alt="Apple">
		</div>
		<p>
			Time Scopes is a life time tracker. It shows to you remaining your lifetime and other informations
		</p>
	</a>
</div>

<Footer />

<style>
	.TimeScopes {
		display: flex;
		flex-direction: column;
		align-items: center;
		/*justify-content: center;*/
		margin-top: 128px;
		width: 100%;
	}

	.TimeScopes a {
		display: block;
		width: 100%;
		text-decoration: none;
		color: inherit;
	}

	.appinfo {
		display: flex;
		flex-direction: row;
		 /* 좌측/우측 끝으로 분배 */
		align-items: baseline;
		width: 100%;
		justify-content: space-between;
	}

	.appicon {
		width: 128px;
		height: 128px;
		border-radius: 24px;
		margin-bottom: 64px;
	}

	.platform {
		width: 24px;
		height: 24px;
		margin-right: 0;
	}
</style>