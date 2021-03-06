import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, NavLink, useLocation } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { MenuRoutes, SystemRoutes } from '../../enums'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../features/currentUser/currentUserSlice'
import { RootState } from '../../store'

const styleLink = ({ isActive }: { isActive: boolean }) => ({ color: isActive ? 'brown' : '' })

export default function DesktopSidebar() {
  const { isLoggedIn } = useSelector((state: RootState) => state.currentUser)
  const dispatch = useDispatch()

  const [topOffset, setTopOffset] = useState('0rem')
  const { pathname } = useLocation()
  console.log(pathname, topOffset)

  useEffect(() => {
    if (pathname === '/') setTopOffset('0rem')
    if (pathname === '/news') setTopOffset('2rem')
    if (pathname === '/documents') setTopOffset('4rem')
    if (pathname === '/contacts') setTopOffset('6rem')
  }, [pathname])

  return (
    <Wrapper className='sidebar'>
      <section className='account-container'>
        {isLoggedIn ? (
          <div className='logged-in-container'>
            <div className='account'>
              <AccountCircleIcon sx={{ mr: 1 }} />
              admin
            </div>
            <div className='log-out' onClick={() => dispatch(logOut())}>
              <LogoutIcon sx={{ ml: 1 }} />
            </div>
          </div>
        ) : (
          <div className='logged-out-container'>
            <Link to={SystemRoutes.SignIn}>
              <div className='log-in'>
                <LoginIcon sx={{ mr: 1 }} />
                Войти
              </div>
            </Link>
          </div>
        )}
      </section>

      <section className='menu-container'>
        <h3>Меню</h3>
        <div className='menu-links-container'>
          <OutlineMarker top={topOffset} />
          <ul>
            <NavLink to={MenuRoutes.Home} style={styleLink}>
              <li className=''>Главная</li>
            </NavLink>
            <NavLink to={MenuRoutes.News} style={styleLink}>
              <li className=''>Новости</li>
            </NavLink>
            <NavLink to={MenuRoutes.Documents} style={styleLink}>
              <li className=''>Документы</li>
            </NavLink>
            <NavLink to={MenuRoutes.Contacts} style={styleLink}>
              <li className=''>Контакты</li>
            </NavLink>
          </ul>
        </div>
        {isLoggedIn && <hr className='divider' />}
        {isLoggedIn && (
          <ul>
            <NavLink to={SystemRoutes.Add + '/announcement'} style={styleLink}>
              <li className=''>Главное объявление</li>
            </NavLink>
            <NavLink to={SystemRoutes.Add + '/news'} style={styleLink}>
              <li className=''>Новость</li>
            </NavLink>
            <NavLink to={SystemRoutes.Add + '/document'} style={styleLink}>
              <li className=''>Документ</li>
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

      .menu-links-container {
        position: relative;
        padding-left: 1rem;
      }

      li {
        text-transform: uppercase;
        margin: 0.5rem 0;
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

const OutlineMarker = styled.div<{ top: string }>`
  position: absolute;
  top: ${(props) => props.top || 0};
  left: 0;
  width: 0.25rem;
  height: 1.5rem;
  background-color: brown;
  border-radius: 0.5rem;
  transition: top 0.25s cubic-bezier(0, 1, 0.5, 1);
`
