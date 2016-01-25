import { Urls } from '../constants'
import { setUrl } from '../actions'
import { footerComponent as strings } from '../data/strings.json'

export default function ({url}, dispatch) {
  function renderFilter (urlToRender, text) {
    const disabled = urlToRender === url
    const classes = 'button button-small' + 
      (disabled ? 'button-disabled' : '')
    return <a 
      className={classes} 
      href={urlToRender} 
      onclick={e => {
        e.preventDefault()
        if (!disabled) {
            dispatch(setUrl(urlToRender))
        }
      }}>
      {text}
    </a>
  }

  return <div className='button-group'>
    {renderFilter(Urls.HOME, strings.All)}
    {renderFilter(Urls.COMPLETED, strings.Completed)}
    {renderFilter(Urls.ACTIVE, strings.Active)}
  </div>
}
