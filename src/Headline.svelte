<script>
  import dayjs from 'dayjs';
  import { mode } from './stores.js';
  import { includes, split, last } from 'ramda';

  let search = {
    el: null,
    service: null,
    query: null,
    error: false
  };
  
  const date = dayjs().format('dddd, D.M.YYYY');

  const setSearchService = service => {
    switch(service) {
      case 'd':
        search.error = false;
        search.service = 'https://discogs.com/search/?q=';
        break;
      case 'g':
        search.error = false;
        search.service = 'https://google.com/search?q=';
        break;
      case 'so':
        search.error = false;
        search.service = 'https://stackoverflow.com/search?q=';
        break;
      case 'r':
        search.error = false;
        search.service = 'https://reddit.com/search/?q=';
        break;
      case 'yt':
        search.error = false;
        search.service = 'https://youtube.com/results?search_query=';
        break;
      default:
        search.error = true;
        search.service = service;
    }
  };

  function handleKeydown(ev) {
    let { key } = ev;

    switch(key) {
      case '/':
        setTimeout(() => {
          search.el.focus();
        }, 50);
        break;
      case 'Escape':
        search.el.blur();
        search.query = null;
        search.error = null;
        break;
      case ':':
        setSearchService(search.query);
        break;
      case 'Enter':
        if (search.error) return;

        if (includes(':', search.query)) {
          const query = last(split(':', search.query));
          return window.location.href = `${search.service}${query}`;
        }
        return window.location.href = `https://duckduckgo.com/?q=${search.query}`;
    }
  }
</script>

<style>
  .search {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><path fill='%238C92A0' d='M11.44 10.73l4.41 4.42a.5.5 0 1 1-.7.7l-4.42-4.41a6.5 6.5 0 1 1 .7-.7v-.01zM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z'></path></svg>");
    background-repeat: no-repeat;
    background-position: 15px 10px;
    background-size: 20px 20px;
    width: 600px;
    background-color: var(--search);
    border-width: 1px;
    border-style: solid;
    border-color: var(--search);
  }
  .search:focus {
    box-shadow: 0 0 0 3px var(--focus);
  }
  .search-err:focus {
    box-shadow: 0 0 0 3px var(--errFocus);
  }
</style>

<svelte:window on:keydown={handleKeydown} />

<div class="flex pt-10 pb-16"> 
  <div class="flex flex-col justify-center space-between">
    <p>{date}</p>
    <input
      class="search shadow appearance-none focus:outline-none py-2 pl-12 pr-6 my-4 rounded-lg"
      class:search-err={search.error}
      bind:value={search.query}
      bind:this={search.el}
      autofocus
    >
    {#if search.error}
      <p class="text-sm italic text-aurora-r">{search.service} is not a valid search service.</p>
    {/if}
  </div>
</div>
