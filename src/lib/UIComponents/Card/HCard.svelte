<script>
  export let title = "";
  export let description = "";
  export let background = "";
  export let link = "";
</script>

<cardBody style={`background-image: url('${background}');`}>
  <cardContent>
    <textContent>
      <cardTitle>
          <a href={link}>{title}</a>
      </cardTitle>
      <cardDescription>{description}</cardDescription>
    </textContent>
  </cardContent>
</cardBody>

<style>
  cardBody {
    position: relative;
    width: 680px;
    min-height: 820px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    border-radius: 64px;
  }

  cardContent {
    padding: 32px;
    display: flex;
    flex-direction: column;
  }

  textContent {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  cardTitle {
    font-size: var(--text-header);
    font-weight: 500;
    color: var(--color-text-primary);
    margin-bottom: 8px;
  }

  a {
    display: inline-block;
  }

  cardDescription {
    font-size: var(--text-body);
    color: var(--color-text-primary);
  }
</style>
