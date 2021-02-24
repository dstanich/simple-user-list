# Next.js Simple User List
Simple User List implemented with [Next.js](https://nextjs.org/).

## Unique Features
Next.js enables some unique features compared to other implementations in this repo.

### Partially Server Rendered
One of the major benefits of Next.js is server rendering a lot of the static HTML so that the payload can be lowered when delivering content to the browser.  This project makes use of that by default for using Next.js, but also by using some of the other features described in this section.  Because of this feature, after building the project you would need to also package the Next.js server with the build to gain the benefit of the server features.

### Pre-built Data and Paths
The seed of `demo` is pre-built using the `getStaticProps()` and `getStaticPaths()` features of Next.js.  This enables immediate loading of the main page with the content from the `demo` seed.  Clicking into one of the users to see their data is also immediate and pre-built.

The `fallback` property is set to `true` meaning that any path which is not pre-built will force Next.js to call `getStaticProps()` and build it upon being requested and then cache it for anyone in the future.

### API Enablement
Next.js allows the developer to create APIs within the same code base.  This implementation of the Simple User List doesn't use it, but there is a sample API provided in the `pages/api` directory and can be executed by going to http://localhost:3000/api/hello.

## Getting Started
1. Clone repo
1. `cd nextjs`
2. `npm run dev`

## Building and Running Production
**IMPORTANT**: This project currently has a problem where the build will break on fast computers that execute the build to quickly.  This happens because the Random User API is called too quickly during the static generation and the build hits an API threshold limit.  There are likely ways around this, but for now this is a limitation until I resolve it.

Since this project is build with `fallback` set to `true`, it cannot be exported as pure HTML and static assets.

1. Run `npm run build` which outputs the optimized version into `.next/`.  Note the various pieces that are built including static HTML files and common shared chunks.
1. Run `npm start` to run the version in `.next/`

In the optimized version, the HTML has been pre-generated and loading is immediate.  In development, it is generated on demand.
