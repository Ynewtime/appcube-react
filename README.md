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
VITE_NO_PROXY=Bypass IPs or domains when developing with Huawei intranet, e.q.: 172.0.0.0/8,10.0.0.0/16,192.168.0.0/16,127.0.0.1,localhost,inhuawei.com,huawei.com
VITE_HTTP_PROXY=Proxy setting for Huawei intranet, e.q.: http://{your w3 account}:{your w3 password}@proxy.huawei.com:8080
```

(5) Develop offline: `pnpm dev`

(6) [Not Recommend][Debug mode](https://support.huaweicloud.com/usermanual-appcube/appcube_05_0186.html): `pnpm debug`, configure the debug url in your online IDE and then visit the preview page.

(7) Deploy: `pnpm ci`

(8) When developing with Huawei intranet, remember to set the `VITE_NO_PROXY` and `VITE_HTTP_PROXY` env variable.

(9) When developing with internet, **clear** the `VITE_NO_PROXY` and `VITE_HTTP_PROXY` env variable.
