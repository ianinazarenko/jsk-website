import styled from 'styled-components'

export default function Footer() {
  return <Wrapper>&copy; ЖСК-971 2022</Wrapper>
}

const Wrapper = styled.div`
  background-color: var(--clr-light);
  text-align: center;
  padding: 1rem 1.25rem;
  color: var(--clr-dark);
`
