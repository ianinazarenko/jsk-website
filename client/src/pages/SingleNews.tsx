import { useParams } from 'react-router-dom'

export default function SingleNews() {
  const { newsId } = useParams()
  return (
    <div className='g--section g--section-centered'>
      <h1>SingleNews with id: {newsId}</h1>
    </div>
  )
}
