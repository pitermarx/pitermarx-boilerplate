export default function(progress) {
  return <div className='progress progress-small'>
    <span className='meter' style={{width: progress * 100 + '%' }}></span>
  </div>
}