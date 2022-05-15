import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function AppLink({ title, to }: { title: string; to: string }) {
  return (
    <Link to={to}>
      <Container>
        <span className='title'>{title.toLocaleUpperCase()}</span>
        <span className='arraw'>&rarr;</span>
      </Container>
    </Link>
  )
}

const Container = styled.div`
  display: inline-block;
  position: relative;
  margin: 0.75rem 0;
  padding: 0.25rem 0;
  color: var(--clr-dark);
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  cursor: pointer;
  transition: var(--transition);

  &:after {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--clr-dark);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  span {
    line-height: 1.5rem;
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
