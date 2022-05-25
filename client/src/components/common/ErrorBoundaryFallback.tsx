import { Button } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as ErrorBoundaryImg } from '../../assets/img/error_boundary.svg'
import { MenuRoutes } from '../../enums'

export default function ErrorBoundaryFallback() {
  const navigate = useNavigate()
  return (
    <Wrapper className='g--section g--section-centered'>
      <div className='content'>
        <div className='info'>
          <h1>
            Ой-йой... <br /> Что-то пошло не так!
          </h1>
          <div className='btns-container'>
            <Button className='g--btn' onClick={() => window.location.reload()}>
              Обновить страницу
            </Button>
            <Button className='g--btn' onClick={() => navigate(-1)}>
              Вернуться назад
            </Button>
          </div>
        </div>
        <div className='picture'>
          <ErrorBoundaryImg />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;

  .content {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.8rem;
      padding: 0 0.5rem;
    }

    .btns-container {
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 0.25rem;
      margin-bottom: 3rem;
      justify-content: start;
    }

    svg {
      max-height: 24rem;
    }
  }

  @media (min-width: 768px) {
    .content {
      flex-direction: row-reverse;
      align-items: center;

      .info {
        margin-left: 4rem;
      }

      .btns-container {
        display: block;
        margin: 0;

        button {
          margin-bottom: 0.25rem;
        }
      }
    }
  }
`
