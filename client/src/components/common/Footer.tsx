import styled from 'styled-components'

export default function Footer() {
  return <Wrapper>&copy; ЖСК-971 2022</Wrapper>
}

const Wrapper = styled.footer`
  color: var(--clr-dark);
  background-color: var(--clr-light);
  text-align: center;
  padding: 1rem 1.25rem;

  @media (min-width: 768px) {
    margin-top: 2rem;
    background-color: var(--clr-whitesmoke);
  }
`
