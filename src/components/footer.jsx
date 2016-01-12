import {VisibilityFilters, Urls} from '../constants'

export default function (model) {
  function renderFilter(filter, text) {
      if (filter === model.filter) {
        return text
      }

      return (
        <a href={Urls[filter]} onclick={e => e.preventDefault()}>{text}</a>
      )
  }

  return (<p >
    Show:
    {' '}
    {renderFilter(VisibilityFilters.SHOW_ALL, 'All')}
    {', '}
    {renderFilter(VisibilityFilters.SHOW_COMPLETED, 'Completed')}
    {', '}
    {renderFilter(VisibilityFilters.SHOW_ACTIVE, 'Active')}
    .
  </p>)
}