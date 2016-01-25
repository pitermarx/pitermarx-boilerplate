export default function (){
  return (<article>
<p>Inspired by <a href="https://github.com/HenrikJoreteg/feather-app/">feather-app</a>
I wanted to have a &lt;20Kb boilerplate code that I could use as a starting point for personal projects.</p>

<h4>I wanted it to have</h4>

<ol>
  <li>A basic css framework and <a href="https://necolas.github.io/normalize.css/">normalize.css</a></li>
  <li>A <a href="https://facebook.github.io/flux/">flux-like</a> implementation where the view is a simple function of the state</li>
  <li>Support for
    <ul>
      <li><a href="https://facebook.github.io/jsx/">JSX</a> for writting views </li>
      <li><a href="https://esdiscuss.org/topic/javascript-2015">ES6</a> support</li>
      <li>Being able to just <em>npm install</em> stuff</li>
    </ul>
    </li>
  <li>Would be nice to
    <ul>
      <li>Have hot-reloading </li>
      <li>Forward and backwards buttons work as expected</li>
      <li>Have precompiled html pages to serve even without js on the client</li>
      <li>Have a simple set of commands for building/setting up a local server/deploying </li>
    </ul>
  </li>
</ol>

<h4>The current solution is</h4>

<ol>
  <li>Using <a href="http://yeticss.com/">Yeti.css</a></li>
  <li>Using <a href="https://github.com/rackt/redux">redux</a> and a bit of handwritten js</li>
  <li>Using <a href="https://github.com/Matt-Esch/virtual-dom">virtual-dom</a>, <a href="https://github.com/bitinn/vdom-parser">vdom-parser</a> and <a href="https://github.com/nthtran/vdom-to-html/">vdom-to-html</a> some related packages to handle DOM rendering/parsing/diffing/suffs</li>
  <li>Using <a href="https://webpack.github.io/">webpack</a> and <a href="http://webpack.github.io/docs/webpack-dev-server.html">webpack-dev-server</a>
    <ul>
      <li><a href="https://github.com/henrikjoreteg/hjs-webpack">hjs-webpack</a> was very useful</li>
      <li><a href="https://babeljs.io/">babel</a> is the way to go for JSX and ES6</li>
    </ul>
  </li>
  <li>Using <a href="https://docs.npmjs.com/misc/scripts">npm scripts</a></li>
  <li>Using <a href="https://surge.sh/">surge.sh</a></li>
</ol>

<p>The built version is has 3 files</p>

<table>
  <thead>
    <tr><th>File</th><th>Size(gziped)</th></tr>
  </thead>
  <tbody>
    <tr><td>.js</td><td>12.8 kB</td></tr>
    <tr><td>.css</td><td>5.5 kB</td></tr>
    <tr><td>.html</td><td>2 kB</td></tr>
  </tbody>
</table>

<h4>Usage</h4>

<p>After <em>npm install</em></p>

<ol>
  <li>Build with <em>npm run build</em></li>
  <li>Start a dev server with <em>npm run start</em></li>
  <li>Deploy to surge with <em>npm run deploy</em></li>
  <li>Have fun with <em>npm run yolo</em></li>
</ol>

</article>)
}