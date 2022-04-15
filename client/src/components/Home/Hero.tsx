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
      <div>
        <ContactsShort title='Телефон ЖСК' content='+ 7 (812) 999-00-00' />
        <ContactsShort title='Телефон аварийной службы' content='+ 7 (812) 999-00-00' />
        <ContactsShort title='E-mail ЖСК' content='jsk-971@mail.ru' />
      </div>
      <AppLink title='Все контакты' to='/contacts' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 0.75rem;
`
