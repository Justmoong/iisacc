<!-- P2PFoundationLink.svelte -->
<script>
	const url = "https://wiki.p2pfoundation.net/Main_Page";
	const logo = "/images/p2p-logo.png";
</script>

<style>
    .p2p-container {
        display: flex;
        align-items: center;
        gap: 32px;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 16px;
        padding-bottom: 16px;
        border-radius: 36px;
        background-color: var(--color-background-secondary);
    }

    .p2p-logo {
        width: 64px;
        height: 64px;
        object-fit: contain;
    }

    .p2p-text {
				font-size: var(--text-caption);
        flex: 1;
    }

    .p2p-button {
        padding: 8px, 8px;
        color: white;
        text-decoration: none;
        border-radius: 16px;
        font-weight: bold;
    }

    .p2p-button:hover {
        background-color: #444;
    }
</style>

<div class="p2p-container">
	<img src={logo} alt="P2P Foundation Logo" class="p2p-logo" />
	<div class="p2p-text">
		<p>
			This website agrees with the philosophy of the P2P Foundation to share ideas about technology and social structure, and contributes the practice of autonomous knowledge sharing and decentralized collaboration.		</p>
	</div>
	<a class="p2p-button" href={url} target="_blank" rel="noopener noreferrer">
		Visit P2P Foundation Wiki
	</a>
</div>