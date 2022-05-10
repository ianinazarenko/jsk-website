import { Button, TextField } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

export default function SignIn() {
  const [creds, setCreds] = useState(initialState)
  const { name, email, password, isMember } = creds

  // const onCredsChange: React.ChangeEventHandler = (e: ChangeEvent) => {
  //   const target = e.target as HTMLInputElement
  //   console.log(target.value)
  // }

  function onCredsChange(e: ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.value)
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }

  return (
    <Wrapper className='g--section'>
      <div className='centered'>
        <form onSubmit={(e) => e.preventDefault()}>
          <h4>{isMember ? 'Вход' : 'Регистрация'}</h4>
          <div className='form-row'>
            {isMember || (
              <TextField
                value={name}
                label='Имя'
                type='text'
                variant='filled'
                name='name'
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
              onChange={onCredsChange}
            />
          </div>
          {isMember ? (
            <div>
              Еще не зарегистрированы?
              <button
                type='button'
                className='text-btn'
                onClick={() => setCreds({ ...creds, isMember: !isMember })}
              >
                Зарегистрироваться
              </button>
            </div>
          ) : (
            <div>
              Уже зарегистрированы?{' '}
              <button
                type='button'
                className='text-btn'
                onClick={() => setCreds({ ...creds, isMember: !isMember })}
              >
                Войти
              </button>
            </div>
          )}
          <div className='form-row'>
            <Button type='submit' className='submit-btn'>
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
      min-width: 20rem;
    }
  }

  .submit-btn {
    color: var(--clr-dark) !important;
    border-color: var(--clr-dark) !important;

    &:hover {
      border-color: var(--clr-dark) !important;
      background-color: var(--clr-primary-transparent) !important;
    }
  }

  .text-btn {
    border: none;
    background: transparent;
    color: var(--clr-dark);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      color: var(--clr-primary);
    }
  }
`
