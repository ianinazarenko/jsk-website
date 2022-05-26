import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useState } from 'react'
import { MenuRoutes, SystemRoutes } from '../../enums'

const styleLink = ({ isActive }: { isActive: boolean }) => ({ color: isActive ? 'brown' : '' })

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
            <Link to={SystemRoutes.SignIn}>
              <div className='log-in' onClick={() => setIsLoggedIn(true)}>
                <LoginIcon sx={{ mr: 1 }} />
                Войти
              </div>
            </Link>
          </div>
        )}
      </section>

      <section className='menu-container'>
        <h3>Меню</h3>
        <ul>
          <NavLink to={MenuRoutes.Home} style={styleLink}>
            <li className='g--hover-link'>Главная</li>
          </NavLink>
          <NavLink to={MenuRoutes.News} style={styleLink}>
            <li className='g--hover-link'>Новости</li>
          </NavLink>
          <NavLink to={MenuRoutes.Documents} style={styleLink}>
            <li className='g--hover-link'>Документы</li>
          </NavLink>
          <NavLink to={MenuRoutes.Contacts} style={styleLink}>
            <li className='g--hover-link'>Контакты</li>
          </NavLink>
        </ul>
        {isLoggedIn && <hr className='divider' />}
        {isLoggedIn && (
          <ul>
            <NavLink to={SystemRoutes.Add + '/announcement'} style={styleLink}>
              <li className='g--hover-link'>Главное объявление</li>
            </NavLink>
            <NavLink to={SystemRoutes.Add + '/news'} style={styleLink}>
              <li className='g--hover-link'>Новость</li>
            </NavLink>
            <NavLink to={SystemRoutes.Add + '/document'} style={styleLink}>
              <li className='g--hover-link'>Документ</li>
            </NavLink>
          </ul>
        )}
      </section>

      <section className='ballast-container'>{/* Dummy section */}</section>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 1170px) {
    min-width: 18rem;
    max-width: 28rem;
    height: 100vh;
    padding: 2rem 3rem;
    display: block;
    position: sticky;
    top: 0;
    background-color: var(--clr-white);
    border-right: 1px solid #c4c4c4;
    display: grid;
    grid-template-rows: 10% 1fr 10%;
    row-gap: 2rem;

    h3 {
      color: var(--clr-gray);
      font-weight: 400;
      text-transform: uppercase;
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
        transition: all var(--transition);
        cursor: pointer;

        &:hover {
          color: var(--clr-primary);
        }
      }

      .account {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: all var(--transition);
        cursor: pointer;

        svg {
          margin-right: 0.5rem;
        }

        &:hover {
          color: var(--clr-primary);
        }
      }

      .log-out {
        display: flex;
        align-items: center;
        line-height: 1;
        transition: all var(--transition);
        cursor: pointer;

        &:hover {
          color: var(--clr-primary);
        }
      }
    }

    /* MAIN MENU */
    .menu-container {
      font-size: 1rem;
      align-self: center;

      li {
        text-transform: uppercase;
      }

      .divider {
        width: 6rem;
        height: 1px;
        margin: 2rem auto;
        border: none;
        border-top: 1px solid #c4c4c4;
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
