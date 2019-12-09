<script>
  import feather from 'feather-icons';
  import { mode } from './stores.js';
  import Headline from './Headline.svelte'
  import Frequent from './Frequent/Frequent.svelte'

  let icon;
  let ariaLabel; 

  $: if ($mode == 'light') {
    icon = feather.icons.moon.toSvg();
    ariaLabel = 'Switch to dark mode';
    document.body.classList.add('light', 'trans');
    document.body.classList.remove('dark');
  } else {
    icon = feather.icons.sun.toSvg();
    ariaLabel = 'Switch to light mode';
    document.body.classList.add('dark', 'trans');
    document.body.classList.remove('light');
  }
</script>

<style>
  hr {
    color: var(--hr);
    border-top-width: 1.4px;
  }
</style>

<main class="flex justify-center h-screen">
  <div class="container my-16">
    <hr>
    <div class="flex justify-end pt-8">
      <button
        aria-label={ariaLabel}
        class="rounded-full p-2"
        on:click={mode.switch}>
        {@html icon}
      </button>
    </div>
    <Headline />
    <Frequent />
  </div>
</main>
