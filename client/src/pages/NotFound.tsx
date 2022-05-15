import styled from 'styled-components'
import { ContactsShort } from '../components/common'
import { ReactComponent as NotFoundImg } from '../assets/img/not_found.svg'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Wrapper>
      <div>
        <div className='picture'>
          <NotFoundImg />
        </div>
        <div className='content'>
          <div className='error-code'>404</div>
          <h1>Хм, здесь ничего нет</h1>
          <p>Поскребли по сусекам, но не смогли найти такую странцу</p>
          <Link to={'/'}>
            <Button className='g--btn' variant='outlined'>
              На главную
            </Button>
          </Link>
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
    margin: 0;
    line-height: 1;
  }

  .error-code {
    color: var(--clr-dark);
    font-size: 5rem;
    font-weight: bold;
    line-height: 1;
  }

  .picture {
    display: none;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    row-gap: 1rem;
    max-width: 30rem;
  }

  @media (min-width: 768px) {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;

    .error-code {
      display: none;
    }

    .picture {
      display: block;
      max-width: 30rem;
      margin-bottom: 2rem;

      svg {
        height: auto;
      }
    }
  }
`
