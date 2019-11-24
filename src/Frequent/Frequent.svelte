<script>
  // persist featured applications
  import data from '../../prefs/frequent.json'
  import GridItem from './GridItem.svelte'

</script>

<style>
  .cntr {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 75px 75px 75px 75px;
    grid-gap: 15px;
  }
</style>

<p class="text-3xl font-bold font-mont">frequent</p>
<div class="cntr py-3">
  {#each data.frequent as item }
    <GridItem {...item} />
  {/each}
</div>
