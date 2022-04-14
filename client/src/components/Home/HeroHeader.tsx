import styled from 'styled-components'

export default function HeroHeader() {
  return (
    <Wrapper>
      <p className='header-title'>ЖСК-971</p>
      <p className='header-desc'>
        Жилищно-строительный кооператив
        <br />
        ул. Весенняя, д. 35
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .header-title {
    font-size: 3rem;
    color: var(--clr-dark);
    font-weight: 700;
    margin-bottom: 0;
  }

  .header-desc {
    margin-bottom: 2.5rem;
  }
`
