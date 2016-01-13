# [Pitermarx-Boilerplate](https://pitermarx-boilerplate.surge.sh)
### A starter kit for small personal projects

#### THIS IS A WORK-IN-PROGRESS

Inspired by [feather-app](https://github.com/HenrikJoreteg/feather-app/)
I wanted to have a <20Kb boilerplate code that I could use as a starting point for personal projects.

#### I wanted it to have
1. A basic css framework and [normalize.css](https://necolas.github.io/normalize.css/)
2. A [flux-like](https://facebook.github.io/flux/) implementation where the view is a simple function of the state
3. Support for
  * [JSX](https://facebook.github.io/jsx/) for writting views 
  * [ES6](https://esdiscuss.org/topic/javascript-2015) support
  * Being able to just *npm install* stuff
4. Would be nice to
  * Have hot-reloading 
  * Forward and backwards buttons work as expected
  * Have precompiled html pages to serve even without js on the client
  * Have a simple set of commands for building/setting up a local server/deploying 

#### The current solution is
 
1. Using [Yeti.css](http://yeticss.com/)
2. Using [redux](https://github.com/rackt/redux) and a bit of handwritten js
3. Using [virtual-dom](https://github.com/Matt-Esch/virtual-dom), [vdom-virtualize](https://github.com/marcelklehr/vdom-virtualize) and [vdom-to-html](https://github.com/nthtran/vdom-to-html/) some related packages to handle DOM rendering/parsing/diffing/suffs
4. Using [webpack](https://webpack.github.io/) and [webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html)
  * [hjs-webpack](https://github.com/henrikjoreteg/hjs-webpack) was very useful
  * [babel](https://babeljs.io/) is the way to go for JSX and ES6
5. Using [npm scripts](https://docs.npmjs.com/misc/scripts)
6. Using [surge.sh](https://surge.sh/)

The built version is has 3 files

|File |Size(gziped)|
|-----|------------|
|.js  |9.3 kB      |
|.css |5.5 kB      |
|.html|894 bytes   |

#### Usage

After *npm install*

1. Build with *npm run build*
2. Start a dev server with *npm run start*
3. Deploy to surge with *npm run deploy*
4. Have fun with *npm run yolo*
