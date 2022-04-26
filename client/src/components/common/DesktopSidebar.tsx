import { TextField } from '@mui/material'
import styled from 'styled-components'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useState } from 'react'

export default function DesktopSidebar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Wrapper className='sidebar'>
      <section className='account-container'>
        {isLoggedIn ? (
          <div className='logged-in-container'>
            <div className='account'>
              <AccountCircleIcon sx={{ mr: 1 }} />
              admin
            </div>
            <div className='log-out' onClick={() => setIsLoggedIn(false)}>
              <LogoutIcon sx={{ ml: 1 }} />
            </div>
          </div>
        ) : (
          <div className='logged-out-container'>
            <div className='log-in' onClick={() => setIsLoggedIn(true)}>
              <LoginIcon sx={{ mr: 1 }} />
              Войти
            </div>
          </div>
        )}
      </section>

      <section className='menu-container'>
        <h3>Меню</h3>
        <ul>
          <Link to='/'>
            <li className='g--hover-link'>Главная</li>
          </Link>
          <Link to='/news'>
            <li className='g--hover-link'>Новости</li>
          </Link>
          <Link to='/documents'>
            <li className='g--hover-link'>Документы</li>
          </Link>
          <Link to='/contacts'>
            <li className='g--hover-link'>Контакты</li>
          </Link>
        </ul>
      </section>

      <section className='sub-menu-container'>
        <h3>Добавить/Редактировать...</h3>
        <ul>
          <Link to='/'>
            <li className='g--hover-link'>Главное объявление</li>
          </Link>
          <Link to='/news'>
            <li className='g--hover-link'>Новость</li>
          </Link>
          <Link to='/documents'>
            <li className='g--hover-link'>Документ</li>
          </Link>
        </ul>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 1170px) {
    display: block;
    position: sticky;
    top: 0;
    height: 100vh;
    background-color: var(--clr-white);
    border-right: 2px solid var(--clr-primary);
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 1.25rem;
    padding-right: 2rem;

    h3 {
      color: var(--clr-gray);
      font-weight: 400;
      text-transform: uppercase;
      padding: 0.25rem 0.5rem;
      border-left: 3px solid transparent;
    }

    /* ACCOUNT */
    .account-container {
      margin-top: 1rem;
      color: var(--clr-gray);

      .logged-in-container,
      .logged-out-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .log-in {
        display: flex;
        align-items: center;
        transition: var(--transition);
        cursor: pointer;

        &:hover {
          color: var(--clr-dark);
        }
      }

      .account {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: var(--transition);
        cursor: pointer;

        svg {
          margin-right: 0.5rem;
        }

        &:hover {
          color: var(--clr-dark);
        }
      }

      .log-out {
        display: flex;
        align-items: center;
        line-height: 1;
        transition: var(--transition);
        cursor: pointer;

        &:hover {
          color: var(--clr-dark);
        }
      }
    }

    /* MAIN MENU */
    .menu-container {
      font-size: 1rem;

      li {
        text-transform: uppercase;
      }
    }

    /* EDIT MENU */
    .sub-menu-container {
      font-size: 0.875rem;

      li {
        text-transform: uppercase;
      }
    }
  }
`
