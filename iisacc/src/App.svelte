<script>
    let name = "World";
</script>

<main>
    <h1>Hello, {name}!</h1>
    <input bind:value={name} placeholder="Enter your name">
</main>

<style>
    main {
        text-align: center;
        font-family: Arial, sans-serif;
        margin: 20px;
    }
    input {
        margin-top: 10px;
        padding: 5px;
    }
</style>