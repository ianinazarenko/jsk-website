import { Button, TextField } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Credentials } from '../types'

const initialCreds: Credentials = {
  name: '',
  email: '',
  password: '',
}

export default function SignIn() {
  const [creds, setCreds] = useState(initialCreds)
  const [isMember, setIsMember] = useState(false)
  const { name, email, password } = creds
  const { isLoggedIn } = useSelector((store: RootState) => store.currentUser)

  function onCredsChange(e: ChangeEvent<HTMLInputElement>): void {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    let data: Credentials
    if (isLoggedIn) {
      data = { email, password }
    } else {
      data = { email, name, password }
    }
    submit(data)
  }

  async function submit(data: Credentials) {
    console.log(data)
  }

  useEffect(() => {
    if (isLoggedIn) setIsMember(true)
  }, [])

  return (
    <Wrapper className='g--section'>
      <div className='centered'>
        <form onSubmit={onSubmit}>
          <h4>{isMember ? 'Вход' : 'Регистрация'}</h4>
          <div className='form-row'>
            {isMember || (
              <TextField
                value={name}
                label='Имя'
                type='text'
                variant='filled'
                name='name'
                className='text-field'
                onChange={onCredsChange}
              />
            )}
          </div>
          <div className='form-row'>
            <TextField
              value={email}
              label='E-mail'
              type='text'
              variant='filled'
              name='email'
              className='text-field'
              onChange={onCredsChange}
            />
          </div>
          <div className='form-row'>
            <TextField
              value={password}
              label='Пароль'
              type='password'
              variant='filled'
              name='password'
              className='text-field'
              onChange={onCredsChange}
            />
          </div>

          <div className='form-row'>
            <span className='helper-text'>
              {isMember ? 'Еще не зарегистрированы? ' : 'Уже зарегистрированы? '}
            </span>
            <button type='button' className='text-btn' onClick={() => setIsMember(!isMember)}>
              {isMember ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </div>

          <div className='form-row'>
            <Button type='submit' className='g--btn-solid' variant='outlined'>
              {isMember ? 'Войти' : 'Зарегистрироваться'}
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

  form {
    padding: 3rem;
    background-color: whitesmoke;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    border-top: 4px solid var(--clr-darkblue);
  }

  .form-row,
  h4 {
    margin-bottom: 1.5rem;

    input {
      min-width: 20rem;
    }

    .helper-text,
    .text-btn {
      font-size: 0.825rem;
    }
  }

  .text-btn {
    border: none;
    background: transparent;
    color: var(--clr-primary);
    cursor: pointer;
    transition: all var(--transition);
  }

  .text-field {
    label.Mui-focused {
      color: #3f3d56;
    }

    .MuiFilledInput-underline:after {
      border-bottom-color: #3f3d56;
    }
  }
`
