# GPT3 UI Project

## Introduction

This is a heavy modification of a base project started by [Adrian Hajdin](https://github.com/adrianhajdin). I really enjoyed the [figma design](https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3) but the "finished" project really just lacked a number of core things I would expect from a modern experience.

A truly modern web application spans multiple pages and will be pulling data, images and more across the wire to deliver a smooth and performant experience to the end user. On top of that missing type safety for compilation and a lack of better folder structure for preprocessors or other platform tooling in the future. 

That being said Adrian finally got me off my butt to just sit down and actually commit something using the tools I love to the open web. While this still needs more work Im just going to expand upon it for a bit in my free time.

## Before and After Results

Next gen image formatting, PRPL pattern and the works can turn that static page into something quite performant. My new application is on the right and the [old base repo](https://github.com/adrianhajdin/project_modern_ui_ux_gpt3) on the left.

![Before and After](https://i.imgur.com/h5ljNMo.png)

Before and after resource load where I took some liberties and moved most of it off the initial page and onto subsequent pages but could have achieved a similar result living it all on one page and using the intersection observer api again. That being said we are down from 3.9MB of JS resources to just 279kb on initial page load and above the fold in almost the same amount of requests, just imagine throwing all this over http 2!

![Before](https://i.imgur.com/f1VB98b.png)
![After](https://i.imgur.com/L7Jm1SC.png)
## What Next?

I would love to add several more things to this application before calling it "done". In order of importance:

1. Auto Scripts for linting and testing to be run automatically with Husky
2. Some simple filters/loops could be unit tested with Jest
3. Deploy it with Vercel automatically
4. Add back older image formats and use the size attribute better with built in next optimizations
5. Add Sign Up/Sign in Functionality
6. Add an "Explore Library" feature as there is one missing link on the site and I did not know what to do with it
7. Answer some of the sample todo's I have left around the code around some dynamic content loading

## Getting Started

First, make sure to get all those great packages you will need

```bash
npm install
```

Then, run the development server using the tool of choice:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Need to see some tests?

Make sure the development server is running and then feel free to open up cypress for a spin.

```bash
npm run cypress
# or
npm run cypress:test
```

