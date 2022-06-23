## Getting Started

(1) Install [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/)

(2) Install packages: `pnpm i`

(3) Setup [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks): `pnpm dlx simple-git-hooks`

(4) Create a `.env` file in the project root, then configure the environment as this:

```
VITE_DOMAIN=Your development domain
VITE_CLIENT_ID=Your client id
VITE_CLIENT_SECRET=Your client secret
VITE_WIDGET_ID=Your widget id
VITE_NO_PROXY=By pass IPs or domains in intranet
VITE_HTTP_PROXY=Proxy setting for intranet
```

(5) Develop offline: `pnpm dev`

(6) [Debug mode](https://support.huaweicloud.com/usermanual-appcube/appcube_05_0186.html): `pnpm debug`, configure the debug url in your online IDE and then visit the preview page.
