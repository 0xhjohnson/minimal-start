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
    color: '#eceff4';
  }
  .grid-item:focus {
    box-shadow: 0 0 0 3px #88c0d0;
  }
</style>

<a class="grid-item flex p-3 rounded hover:bg-night" {href}>
  <div class="flex justify-center items-center mr-4">
    {@html iconSvg}
  </div>
  <div class="flex flex-col justify-center">
    <p class="text-snow text-lg font-mont font-bold">{name}</p>
    <p class="text-snow text-sm font-mont text-frost-light">{url}</p>
  </div>
</a>
