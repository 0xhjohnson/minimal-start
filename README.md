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

### Depoly locally via Docker:
#### Prerequisites
- [Docker](https://www.docker.com/products/docker-desktop)

Once you have Docker installed create an optimized version of your startpage and start local server via:
```
// docker commands most likely require sudo prefix
docker image build -t minimal-start:1.0 .
docker container run -dit --restart always -p 80:5000 -d --name min-startpage minimal-start:1.0
```
Startpage is now running at `localhost:5000` and will stay running unless manually stopped.

### Deploy locally without Docker:
If you are not a fan of Docker feel free to run locally via:
```
yarn build
yarn start
```
From here you could easily deploy to the web via [Netlify](https://www.netlify.com/) or [Zeit now](https://zeit.co/).

### Deploy via Netlify:
Netlify makes it easy to host your startpage for free with the added convenience of continuous deploys from GitHub.

- Connect to your GitHub repo.
- Specify build settings.
    - Command: `yarn build`
    - Directory: `public`
- Deploy!

### Browser configuration:
The steps to set the startpage as your new tab and home page vary from browser to browser. Popular browsers are detailed below.

#### Chrome/Chromium/Brave
Currently a [chrome extension](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna) is required to set the startpage to your new tab page. In the extension options set the redirect URL to your startpage. The default Chrome setting on startup is to open the new tab page so we are all set.

#### Firefox
Similar story for Firefox as they removed the ability to edit the new tab url. Install a [redirect url](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/) extension and you are good to go.

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

*****
Disclaimer: This may be overkill for a startpage but I needed an excuse to try out Svelte sooo...
