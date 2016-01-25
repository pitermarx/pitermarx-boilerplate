/*
 * exports a function that is the current DOM given the store's state
 * the first node should be a div with the id "root" to match what is expected in ../main.js 
 */

import todoApp from './todoApp.jsx'
import description from '../components/description.jsx'
import strings from '../data/strings.json'

export default (store) => <div id='root'>
  <header>
    <div className="container">
      <h1>{strings.title}</h1>
      <p>{strings.subTitle}</p>
    </div>
  </header>
  <div className="container">
    <section className="grid-flex-container">
      <div className='grid-flex-cell'>
        {description()}
      </div>
      <div className='grid-flex-cell'>
        {todoApp(store)}
      </div>
    </section>
  </div>
</div>
