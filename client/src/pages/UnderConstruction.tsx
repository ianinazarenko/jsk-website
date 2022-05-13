import styled from 'styled-components'
import { ContactsShort } from '../components/common'
import { ReactComponent as UnderConstructionImg } from '../assets/img/under_construction.svg'
import { Button } from '@mui/material'

export default function UnderConstruction({ h1 }: { h1: string }) {
  return (
    <Wrapper>
      <div>
        <div>
          <h1>{h1}</h1>
          <h3>Эта страница в разработке</h3>
          <p>Здесь пока ничего нет, но мы работаем над этим</p>
        </div>
        <div className='content'>
          <div className='picture'>
            <UnderConstructionImg />
          </div>
          <div className='contacts'>
            <ContactsShort
              title='Паравление ЖСК'
              phone='+ 7 (812) 999-00-00'
              email='jsk-971@mail.ru'
            />
            <ContactsShort title='Диспетчер аварийной службы' phone='+ 7 (812) 999-00-00' />
            <div>
              <Button>На главную</Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  padding: 2rem;

  h1 {
    color: var(--clr-dark);
    font-size: 2.5rem;
  }

  .content {
    margin-top: 2rem;
    display: block;
  }

  .contacts {
    margin-top: 0.8rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    row-gap: 1.5rem;
  }

  .picture {
    display: none;
  }

  @media (min-width: 768px) {
    padding: 0;

    h1 {
      font-size: 3.5rem;
    }

    .content {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 3rem;
      align-items: center;
    }

    .picture {
      display: block;
      max-width: 20rem;

      svg {
        height: auto;
      }
    }
  }
`
