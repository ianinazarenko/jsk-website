import styled from 'styled-components'
import { ContactsShort } from '../common'
import AppLink from '../common/AppLink'
import HeroHeader from './HeroHeader'

export default function Hero() {
  return (
    <Wrapper className='g--section'>
      <div>
        <HeroHeader />
      </div>
      <div className='contacts'>
        <ContactsShort title='Телефон ЖСК' content='+ 7 (812) 999-00-00' />
        <ContactsShort title='Телефон аварийной службы' content='+ 7 (812) 999-00-00' />
        <ContactsShort title='E-mail ЖСК' content='jsk-971@mail.ru' />
      </div>
      <AppLink title='Все контакты' to='/contacts' />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 0.75rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  row-gap: 2rem;

  .contacts {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    row-gap: 1rem;
  }

  @media (min-width: 768px) {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    align-items: center;
  }

  @media (min-width: 960px) {
    .contacts {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`
