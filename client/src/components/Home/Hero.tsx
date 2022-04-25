import styled from 'styled-components'
import { ContactsShort } from '../common'
import AppLink from '../common/AppLink'
import HeroHeader from './HeroHeader'

export default function Hero() {
  return (
    <Wrapper className='g--section g--centered-768'>
      <div>
        <HeroHeader />
      </div>
      <div className='contacts-container'>
        <ContactsShort title='Телефон ЖСК' content='+ 7 (812) 999-00-00' />
        <ContactsShort title='E-mail ЖСК' content='jsk-971@mail.ru' />
        <ContactsShort title='Телефон аварийной службы' content='+ 7 (812) 999-00-00' />
      </div>
      <AppLink title='Все контакты' to='/contacts' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 0.75rem;

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: 1fr auto;
    row-gap: 1.5rem;
    align-items: center;
    margin: 2rem auto;

    .contacts-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      row-gap: 1rem;
    }

    p {
      margin: 0;
    }
    .header-desc {
      margin-bottom: 0.25rem;
    }
  }
`
