<script>
  import feather from 'feather-icons'


  export let name;
  export let icon;
  export let url;

  const href = `https://${url}`;
  const iconSvg = feather.icons[icon].toSvg();
</script>

<style>
  svg.feather {
    width: 3em;
    height: 3em;
  }
  .grid-item:hover {
    background-color: var(--linkHover);
  }
  .grid-item:focus {
    box-shadow: 0 0 0 3px var(--focus);
  }
  .url {
    color: var(--url);
  }
</style>

<a class="grid-item flex p-3 rounded" {href}>
  <div class="flex justify-center items-center mr-4">
    {@html iconSvg}
  </div>
  <div class="flex flex-col justify-center">
    <p class="text-lg font-mont font-bold">{name}</p>
    <p class="url text-sm font-mont">{url}</p>
  </div>
</a>
