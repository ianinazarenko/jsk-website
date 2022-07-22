import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useForm, SubmitHandler } from 'react-hook-form'

import axios from 'axios'
import { RootState } from '../store'

import { Credentials, BasicAlert } from '../types'
import { AlertType } from '../enums'

import { logIn, register } from '../features/currentUser/currentUserSlice'
import CircularProgress from '@mui/material/CircularProgress'

import styled from 'styled-components'
import { Button, Fade, TextField, Alert } from '@mui/material'

const initialCreds: Credentials = {
  name: '',
  email: '',
  password: '',
}

export default function SignIn() {
  const [creds, setCreds] = useState(initialCreds)
  const [isLoading, setIsLoading] = useState(false)
  const [isMember, setIsMember] = useState(false)
  const [alert, setAlert] = useState<BasicAlert>({
    type: AlertType.Info,
    isShown: false,
    message: '',
  })
  const { isLoggedIn } = useSelector((store: RootState) => store.currentUser)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Credentials>()

  const { name, email, password } = creds
  const url = '/api/v1/auth'

  function onCredsChange(e: ChangeEvent<HTMLInputElement>): void {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }

  function onSubmit(data: Credentials) {
    console.log(data)

    // e.preventDefault()

    // dispatch(logIn('payload'))
    // let data: Credentials
    // if (isMember) {
    //   data = { email, password }
    // } else {
    //   data = { email, name, password }
    // }
    // submit(data)
  }

  async function submit(data: Credentials) {
    setIsLoading(true)
    let apiUrl: string = isMember ? url + '/login' : url + '/register'
    try {
      const response = await axios.post(apiUrl, data)
      if (response.data) {
        const {
          user: { name, email, _id: id },
          token,
        } = response.data
        // dispatch(register({ name, email, id, token }))
      }
    } catch (error: any) {
      console.log(error)
      if (error.hasOwnProperty('response') && error.response.data.msg) {
        setAlert({
          type: AlertType.Error,
          message: error.response.data.msg,
          isShown: true,
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  console.log('render')

  useEffect(() => {
    if (isLoggedIn) setIsMember(true)
  }, [isLoggedIn])

  useEffect(() => {
    if (alert.isShown) {
      const timeoutId = setTimeout(() => {
        setAlert({ ...alert, isShown: false })
      }, 7000)
      return () => clearTimeout(timeoutId)
    }
  }, [alert])

  return (
    <Wrapper className='g--section'>
      <div className='centered'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4>{isMember ? 'Вход' : 'Регистрация'}</h4>
          <div className='form-row'>
            {isMember || (
              <TextField
                value={name}
                label='Имя'
                type='text'
                variant='filled'
                className='text-field'
                {...register('name', { required: true, maxLength: 20 })}
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
            <Button type='submit' className='g--btn-solid' variant='outlined' disabled={isLoading}>
              {isLoading ? (
                <CircularProgress
                  size={24}
                  sx={{
                    color: 'white',
                  }}
                />
              ) : isMember ? (
                'Войти'
              ) : (
                'Зарегистрироваться'
              )}
            </Button>
          </div>
          {errors.name && <span>This field is required</span>}
        </form>
      </div>
      <Fade in={alert.isShown}>
        <Alert
          severity={alert.type}
          className='alert'
          onClose={() => setAlert((prev) => ({ ...prev, isShown: false }))}
        >
          {alert.message}
        </Alert>
      </Fade>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100%;
  display: grid;
  place-items: center;
  position: relative;

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

  .alert {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }

  @media (min-width: 1170px) {
    .alert {
      position: absolute;
      right: 1rem;
      bottom: 0;
    }
  }
`
