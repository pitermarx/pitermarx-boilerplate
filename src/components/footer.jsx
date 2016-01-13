import { Urls } from '../constants'
import { setUrl } from '../actions'

export default function (state, dispatch) {
  const {url} = state
  function renderFilter (urlToRender, text) {
    if (urlToRender === url) {
      return text
    }

    return <a href={urlToRender} onclick={e => {
      e.preventDefault()
      dispatch(setUrl(urlToRender))
    }}>{text}</a>
  }

  return <p>
    Show:
    {' '}
    {renderFilter(Urls.HOME, 'All')}
    {', '}
    {renderFilter(Urls.COMPLETED, 'Completed')}
    {', '}
    {renderFilter(Urls.ACTIVE, 'Active')}
    .
  </p>
}
