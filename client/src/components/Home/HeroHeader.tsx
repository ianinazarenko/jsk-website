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
    color: var(--clr-primary);
    font-weight: 700;
    margin-bottom: 0;
    font-family: var(--font-display);
  }

  .header-desc {
    margin-bottom: 2.5rem;
    margin-bottom: 0;
    font-family: var(--font-display);
  }

  @media (min-width: 960px) {
    .header-title {
      font-size: 4rem;
    }

    .header-desc {
      margin-bottom: 0;
    }
  }
`
