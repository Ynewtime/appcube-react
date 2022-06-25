## Getting Started

(1) Install [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/)

(2) Install packages: `pnpm i`

(3) Setup [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks): `pnpm dlx simple-git-hooks`

(4) Create a `.env` file in the project root, then configure the environment as this:

```
VITE_DOMAIN=Your development domain
VITE_CLIENT_ID=Your client id
VITE_CLIENT_SECRET=Your client secret
VITE_WIDGET_ID=Your widget id, e.q.: t0000000000siw3nmxj9n_NewWidget
VITE_NO_PROXY=Bypass IPs or domains when developing with Huawei intranet, e.q.: 172.0.0.0/8,10.0.0.0/16,192.168.0.0/16,127.0.0.1,localhost,inhuawei.com,huawei.com
VITE_HTTP_PROXY=Proxy setting for Huawei intranet, e.q.: http://{your w3 account}:{your w3 password}@proxy.huawei.com:8080
```

`VITE_DOMAIN`, `VITE_CLIENT_ID` and `VITE_CLIENT_SECRET` are required.

If `VITE_WIDGET_ID` is configured, you are updating the widget.
Otherwise you are creating a new one. In this case make sure you configured `scripts/upload.ts` first:

```
// For creating a new widget, you need to configure these property first:
let identifier = '' // Make sure the `identifier` is unique. e.g. t0000000000siw3nmxj9n_NewWidget
let name = '' // e.g. {"en_US":"Widget","zh_CN":"通用组件测试"}
let description = '' // e.g. {"en_US":"Widget","zh_CN":"通用组件测试"}
let categoryId = '' // e.g. 16f519d485e-328fa286-893e-43ea-830c-460a2ef178e5
let industryId = '' // e.g. 16c519d44af-361631af-9929-4822-a271-5dc702c81749
let scenariosId = '' // e.g. 00000000000000000001
```

(5) Develop offline: `pnpm dev`

(6) [Not Recommend][debug mode](https://support.huaweicloud.com/usermanual-appcube/appcube_05_0186.html): `pnpm debug`, configure the debug url in your online IDE and then visit the preview page.

(7) Deploy: `pnpm ci`

(8) When developing with Huawei intranet, remember to set the `VITE_NO_PROXY` and `VITE_HTTP_PROXY` env variable.

(9) When developing with internet, **clear** the `VITE_NO_PROXY` and `VITE_HTTP_PROXY` env variable.

## Q&A

Q: How do I run the `.http` file?
A: Use VS Code: [`REST Client`](https://github.com/Huachao/vscode-restclient) plugin.

Q: I cannot run the `.http` file in intranet.
A: Remember to check your [VS Code proxy settings](https://code.visualstudio.com/docs/setup/network#_legacy-proxy-server-support) first: `settings.json` -> `"http.proxy"`
