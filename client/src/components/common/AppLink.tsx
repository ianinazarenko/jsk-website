import styled from 'styled-components'

export default function AppLink({ title }: { title: string }) {
  return (
    <Container>
      <div className='title'>{title.toLocaleUpperCase()}</div>
      <div className='arraw'>&rarr;</div>
    </Container>
  )
}

const Container = styled.div`
  padding: 0.75rem 0;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--clr-dark);
  line-height: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* transition */
  transition: var(--transition);

  /* think about hover over contaner or text? */
  &:hover {
    color: var(--clr-primary);
  }

  .title {
    margin-right: 0.75rem;
    letter-spacing: 1px;
  }

  .arraw {
    font-size: 2rem;
    display: contents;
  }
`
