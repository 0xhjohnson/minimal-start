<script>
  import Headline from './Headline.svelte'
  import Frequent from './Frequent/Frequent.svelte'
</script>

<style>
  hr {
    border-top-width: 1.4px;
  }
</style>

<main class="flex justify-center h-screen">
  <div class="container my-16">
    <hr class="text-frost-lighter">
    <Headline />
    <Frequent />
  </div>
</main>
