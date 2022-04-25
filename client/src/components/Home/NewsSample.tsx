import styled from 'styled-components'

export default function NewsSample({ title, text }: { title: string; text: string }) {
  return (
    <Container className='hover-link'>
      <h4>{title}</h4>
      <p>{text}</p>
    </Container>
  )
}

const Container = styled.div`
  h4 {
    margin-bottom: 0.75rem;
  }

  p {
    margin-bottom: 0;
  }
`
