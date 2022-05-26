import styled from 'styled-components'
import Button from '@mui/material/Button'

export default function Announcement() {
  return (
    <Wrapper className='g--section'>
      <article className='g--section-centered'>
        <div className='content'>
          <p>Уважаемые жители дома!</p>
          <p>
            Уведомляем вас о том, что ежедневно производится дезинфекция лестничных клеток, перил,
            лифтовых кабин, мусоропроводных клапанов, почтовых ящиков, домофонов.
          </p>
          <p>
            Просим вас самостоятельно протирать свои двери, звонки, соблюдать правила гигиены, не
            пускать детей на детскую площадку.
          </p>
          <div className='footer'>
            <span>{/* <Button variant='text'>Изменить</Button> */}</span>
            <p className='signature'>Правление ЖСК-971</p>
          </div>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* padding-left: 0;
  padding-right: 0; */
  padding: 2rem 0;
  background-color: var(--clr-whitesmoke);
  border-top: 0.25rem solid var(--clr-primary);

  p {
    margin-bottom: 1.25rem;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .signature {
    text-align: right;
    margin-bottom: 0;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    background-color: transparent;
    border-top: none;
    /* padding: 1rem 0; */

    article {
      background-color: var(--clr-whitesmoke);
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 2rem;
      border-top: 0.25rem solid var(--clr-primary);
      padding: 2rem 2.5rem;
    }

    .content {
      max-width: 44rem;
      margin: 0 auto;
    }
  }
`
