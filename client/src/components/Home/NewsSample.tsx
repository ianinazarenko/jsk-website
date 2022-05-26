import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function NewsSample({
  title,
  text,
  id,
}: {
  title: string
  text: string
  id: number
}) {
  return (
    <Link to={`/news/${id}`}>
      <Wrapper>
        <div>
          <span className='g--date-text'>11.05.2022</span>
          <span className='g--dot-text'>&#183;</span>
          <span className='g--author-text'>admin</span>
        </div>
        <div className='main-content g--hover-link'>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  cursor: default;

  @media (min-width: 768px) {
    .main-content {
      cursor: pointer;
      margin: 0;
      margin-left: -1.5rem;
      padding: 0 1.5rem;
    }
  }
`
