import styled from 'styled-components'

export default function Announcement() {
  return (
    <Wrapper className='g--section'>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--clr-light);
  /* padding: 1.25rem; */

  .signature {
    text-align: right;
    margin-bottom: 0;
    font-weight: 700;
  }
`
