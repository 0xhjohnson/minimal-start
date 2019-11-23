<script>
  import dayjs from 'dayjs';
  import { includes, split, last } from 'ramda';

  let searchEl;
  let searchTerm;
  let searchService;
  
  const date = dayjs().format('dddd, D.M.YYYY');

  const setSearchService = service => {
    switch(service) {
      case 'd':
        searchService = 'https://discogs.com/search/?q=';
        break;
      case 'g':
        searchService = 'https://google.com/search?q=';
        break;
      case 'so':
        searchService = 'https://stackoverflow.com/search?q=';
        break;
      case 'r':
        searchService = 'https://reddit.com/search/?q=';
        break;
      case 'yt':
        searchService = 'https://youtube.com/results?search_query=';
        break;
      default:
        console.log('PROMPT USER SEARCH SERVICE NOT FOUND');
    }
  };

  function handleKeydown(ev) {
    let { key } = ev;

    switch(key) {
      case '/':
        setTimeout(() => {
          searchEl.focus();
        }, 50);
        break;
      case 'Escape':
        searchEl.blur();
        searchTerm = '';
        break;
      case ':':
        setSearchService(searchTerm);
        break;
      case 'Enter':
        if (includes(':', searchTerm)) {
          const s = split(':', searchTerm);
          const query = last(s);
          
          return window.location.href = `${searchService}${query}`;
        }
        return window.location.href = `https://duckduckgo.com/?q=${searchTerm}`;
    }
  }
</script>

<style>
  .search-icon {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><path fill='%238C92A0' d='M11.44 10.73l4.41 4.42a.5.5 0 1 1-.7.7l-4.42-4.41a6.5 6.5 0 1 1 .7-.7v-.01zM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z'></path></svg>");
    background-repeat: no-repeat;
    background-position: 15px 10px;
    background-size: 20px 20px;
    width: 600px;
  }
  .search-icon:focus {
    box-shadow: 0 0 0 3px #88c0d0;
  }
</style>

<svelte:window on:keydown={handleKeydown} />

<div class="flex py-16"> 
  <div class="flex flex-col justify-center space-between">
    <p class="text-snow">{date}</p>
    <input
      class="search-icon text-snow shadow appearance-none focus:outline-none py-2 pl-12 pr-6 my-4 bg-night rounded-lg border border-solid border-night"
      bind:value={searchTerm}
      bind:this={searchEl}
    >
  </div>
</div>
