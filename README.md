# minimal start
*minimal startpage with vim(ish) bindings for the keyboard centric*

![minimal startpage screenrecord](https://media.giphy.com/media/cLNRqRbKTSPJgxEvli/giphy.gif)

### Prerequisites:
- [nodejs](https://nodejs.org/en/)
- JS package manager of choice (I will be using [Yarn](https://yarnpkg.com/lang/en/))

### Install:
Clone down the repo
```
git clone https://github.com/0xhjohnson/minimal-start.git
```
Install dependencies
```
cd minimal-start
yarn
```
Start local dev server
```
yarn dev
```
Navigate to [localhost:5000](http://localhost:5000/). The startpage is running and any changes made will reload the page on save.

### Configuration:
Modify the `frequent.json` file in the dir `./prefs` to add your preferred links and icons.
Please note:
- Specify the icon name from [feather icons](https://feathericons.com/).
- No `http` in the URL. Just specify the site and domain.
- Intended to be used with < 13 frequent links by default.
    - Can be modified by changing the `.cntr` grid class in `/src/Frequent/Frequent.svelte`.

### Building and running in production mode:
Once you are happy with your configuration, create an optimized version of your startpage and start local server via:
```
yarn build
yarn start
```
From here you could easily deploy to the web via [GitHub pages](https://pages.github.com/) or [Zeit now](https://zeit.co/).

### Usage:
Navigate to your web browser settings and set your homepage to the local server address or web URL.
#### Bindings
- `/` start searching
- `Esc` stop searching and clear input
- `{search_service}:{search_query}` search services are listed below with examples

#### Search services
Default search service, if not provided, is `duckduckgo`.
- `d:` discogs
- `g` google
- `so` stack overflow
- `r` reddit
- `yt` youtube

#### Example Queries:
Search stack overflow for help...
`so:how to get a girlfriend after learning React?`

Search discogs for some new vinyl...
`d:tyler the creator igor`

Search reddit for memes...
`r:programmer humor`

Search duckduckgo like normal...
`why is documentation so difficult`

---
Disclaimer: This may be overkill for a startpage but I needed an excuse to try out Svelte sooo...
