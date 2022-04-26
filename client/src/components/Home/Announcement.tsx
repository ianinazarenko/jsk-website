import styled from 'styled-components'

export default function Announcement() {
  return (
    <Wrapper className='g--section'>
      <article className='g--centered'>
        <p>Уважаемые жители дома!</p>
        <p>
          Уведомляем вас о том, что ежедневно производится дезинфекция лестничных клеток, перил,
          лифтовых кабин, мусоропроводных клапанов, почтовых ящиков, домофонов.
        </p>
        <p>
          Просим вас самостоятельно протирать свои двери, звонки, соблюдать правила гигиены, не
          пускать детей на детскую площадку.
        </p>
        <p className='signature'>Правление ЖСК-971</p>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--clr-light);
  /* padding: 1.25rem; */

  .signature {
    text-align: right;
    margin-bottom: 0;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    article {
      /* max-width: 648px;
      margin-left: auto;
      margin-right: auto; */
    }
  }
`
