import { Button, TextField } from '@mui/material'
import styled from 'styled-components'

export default function SignIn() {
  return (
    <Wrapper className='g--section'>
      <div className='centered'>
        <form onSubmit={(e) => e.preventDefault()}>
          <h4>Вход/регистрация</h4>
          <div className='form-row'>
            <TextField label='Имя' type='text' variant='filled' />
          </div>
          <div className='form-row'>
            <TextField label='E-mail' type='text' variant='filled' />
          </div>
          <div className='form-row'>
            <TextField label='Пароль' type='password' variant='filled' />
          </div>
          <div>Еще не зарегистрированы? Зарегистрироваться</div>
          <div>Уже зарегистрированы? Войти</div>
          <div className='form-row'>
            <Button type='submit' variant='outlined' className='submit-btn'>
              Войти
            </Button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100%;
  display: grid;
  place-items: center;

  .form-row,
  h4 {
    margin-bottom: 0.75rem;

    input {
      min-width: 16rem;
    }
  }

  .submit-btn {
    color: var(--clr-dark) !important;
  }
`
