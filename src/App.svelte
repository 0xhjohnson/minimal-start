<script>
  import feather from 'feather-icons';
  import { mode } from './stores.js';
  import Headline from './Headline.svelte'
  import Frequent from './Frequent/Frequent.svelte'

  let icon;
  let ariaLabel;

  $: if ($mode) {
    icon = feather.icons.moon.toSvg();
    ariaLabel = 'Switch to dark mode';
    document.body.classList.add('bg-snow');
    document.body.classList.remove('bg-night-darkest');
  } else {
    icon = feather.icons.sun.toSvg();
    ariaLabel = 'Switch to light mode';
    document.body.classList.add('bg-night-darkest');
    document.body.classList.remove('bg-snow');
  }
</script>

<style>
  hr {
    border-top-width: 1.4px;
  }
</style>

<main class="flex justify-center h-screen">
  <div class="container my-16">
    <hr class="text-frost-lighter">
    <div class="flex justify-end pt-8">
      <button
        aria-label={ariaLabel}
        class="rounded-full p-2"
        on:click={() => mode.update(m => !m)}>
        {@html icon}
      </button>
    </div>
    <Headline />
    <Frequent />
  </div>
</main>
