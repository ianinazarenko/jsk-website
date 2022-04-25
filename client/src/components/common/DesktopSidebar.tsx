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

export default function DesktopSidebar() {
  const isLoggedIn = true
  const isOpened = true

  function onArrowClick() {
    console.log('click')
  }

  return (
    <Wrapper>
      <div className='open-close'>
        {isOpened ? <ArrowBackIosIcon onClick={onArrowClick} /> : <ArrowForwardIosIcon />}
      </div>
      <div className='upperContainer'>
        <TextField
          variant='standard'
          label='Поиск...'
          color='warning'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <div className='account'>
          {isLoggedIn ? (
            <div className='logged-account'>
              <div>
                <AccountCircleIcon sx={{ mr: 1 }} />
                admin
              </div>
              <LogoutIcon sx={{ ml: 1 }} />
            </div>
          ) : (
            <div>
              <LoginIcon sx={{ mr: 1 }} />
              Войти
            </div>
          )}
        </div>
      </div>
      <div className='menu-container'>
        <h3>Меню</h3>
        <ul>
          <Link to='/'>
            <li className='hover-link'>Главная</li>
          </Link>
          <Link to='/news'>
            <li className='hover-link'>Новости</li>
          </Link>
          <Link to='/documents'>
            <li className='hover-link'>Документы</li>
          </Link>
          <Link to='/contacts'>
            <li className='hover-link'>Контакты</li>
          </Link>
        </ul>
      </div>
      <div className='sub-menu-container'>
        <h3>Добавить/Редактировать...</h3>
        <ul>
          <Link to='/'>
            <li className='hover-link'>Главное объявление</li>
          </Link>
          <Link to='/news'>
            <li className='hover-link'>Новость</li>
          </Link>
          <Link to='/documents'>
            <li className='hover-link'>Документ</li>
          </Link>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;
  /* position: static; */
  /* transform: translateX(-16.5rem); */

  .open-close {
    position: absolute;
    top: 1rem;
    right: 0.5rem;
    line-height: 1;
    border-radius: 50%;
    padding: 0.25rem;
    color: var(--clr-dark);
  }

  @media (min-width: 960px) {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    width: 20rem;
    border-right: 2px solid var(--clr-primary);
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    padding: 1.25rem;

    h3 {
      color: #999;
      font-weight: 400;
      text-transform: uppercase;
      padding: 0.25rem 0.5rem;
      border-left: 3px solid transparent;
    }

    .menu-container {
      font-size: 1rem;

      li {
        text-transform: uppercase;
      }
    }

    .sub-menu-container {
      font-size: 0.875rem;

      li {
        text-transform: uppercase;
      }
    }

    .account {
      margin-top: 1rem;
      color: #999;
      max-width: 14.5rem;

      div {
        display: flex;
        align-items: center;
      }

      .logged-account {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }

    label.Mui-focused {
      color: var(--clr-primary);
    }

    .MuiInput-underline:after {
      border-bottom-color: var(--clr-primary);
    }

    & .MuiOutlinedInput-root {
      & fieldset {
        border-color: red;
      }
      &:hover fieldset {
        border-color: blue;
      }
      &.Mui-focused fieldset {
        border-color: var(--clr-primary);
      }
    }
  }
`
