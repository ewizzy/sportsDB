This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and using [Bootstrap 5](https://react-bootstrap.github.io/).

## Getting Started
Before you start, make sure to have [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.
First, download this repository and in project folder run:

```bash
npm install
```
then to run dev server:
```bash
npm run dev
```
And finally open [http://localhost:3000](http://localhost:3000) with your browser to see the app.


## Details

Project details:

- React
- Next JS
- Next JS API
- CSS Modules
- Bootstrap 5

How it works:

- Homepage is CSR (useEffect), using NextJS API
- Team page is SSR 

Other:

- `/api/roundResults/[id]` fetch two requests because first request don't have team icons included in response
- team page does request in `getServerSideProps` and not in Next JS API (as recommended by NextJS since both are server-side)
