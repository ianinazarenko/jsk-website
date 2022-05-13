import styled from 'styled-components'
import { ContactsShort } from '../common'
import AppLink from '../common/AppLink'
import HeroHeader from './HeroHeader'

export default function Hero() {
  return (
    <section className='g--section'>
      <Wrapper className='g--section-centered'>
        <div>
          <HeroHeader />
          <AppLink title='Все контакты' to='/contacts' />
        </div>
        <div className='contacts'>
          <ContactsShort
            title='Паравление ЖСК'
            phone='+ 7 (812) 999-00-00'
            email='jsk-971@mail.ru'
          />
          <ContactsShort title='Диспетчер аварийной службы' phone='+ 7 (812) 999-00-00' />
        </div>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  margin-top: 0.75rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  row-gap: 2rem;

  .contacts {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, auto);
    row-gap: 1.25rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    column-gap: 3rem;
  }

  /* @media (min-width: 1170px) {
    max-width: 960px;
    display: grid;
  } */
`
