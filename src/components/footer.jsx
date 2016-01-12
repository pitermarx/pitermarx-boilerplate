import {Urls} from '../constants'

export default function (model) {
  function renderFilter(url, text) {
      if (url === model.url) {
        return text
      }

      return (
        <a href={url} onclick={e =>{
          e.preventDefault()
          model.setUrl(url)
        }}>{text}</a>
      )
  }

  return (<p >
    Show:
    {' '}
    {renderFilter(Urls.HOME, 'All')}
    {', '}
    {renderFilter(Urls.COMPLETED, 'Completed')}
    {', '}
    {renderFilter(Urls.ACTIVE, 'Active')}
    .
  </p>)
}