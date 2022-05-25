import { useState, SyntheticEvent, useEffect } from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Tabs, Tab } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { MenuRoutes, SystemRoutes } from '../../enums'

export default function MobileSidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [url, setUrl] = useState(location.pathname as MenuRoutes)

  function onChange(e: SyntheticEvent, newValue: MenuRoutes) {
    console.log(`Mobile navbar: ${url}`)

    // if (Object.values(MenuRoutes).includes(newValue))
    setUrl(newValue)
    navigate(newValue)
  }

  return (
    <Container>
      <div className='login-icon-container'>
        <AccountCircleIcon />
      </div>
      <Tabs
        value={url}
        variant='scrollable'
        scrollButtons='auto'
        className='tabs'
        onChange={onChange}
        TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
      >
        <Tab value={MenuRoutes.Home} label='Главная' className='tab' />
        <Tab value={MenuRoutes.Documents} label='Документы' className='tab' />
        <Tab value={MenuRoutes.News} label='Новости' className='tab' />
        <Tab value={MenuRoutes.Contacts} label='Контакты' className='tab' />
        <Tab value={SystemRoutes.Add} label='Добавить' className='tab hidden' />
        <Tab value={SystemRoutes.SignIn} label='Войти' className='tab hidden' />
      </Tabs>
    </Container>
  )
}

const Container = styled.nav`
  margin-top: 1rem;
  background-color: var(--clr-dark);
  color: var(--clr-white);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding-left: 1.25rem;
  position: sticky;
  bottom: 0;
  overflow-x: hidden;

  .login-icon-container {
    line-height: 1;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    border-right: 1px solid var(--clr-light);
    padding-right: 0.75rem;
  }

  .tabs {
    margin-left: 0.25rem;

    .tab {
      color: var(--clr-white);
      opacity: 1;
    }

    .MuiTabs-indicator {
      background-color: transparent;
      height: 0.5rem;
      display: flex;
      justify-content: center;
    }

    .MuiTabs-indicatorSpan {
      background-color: var(--clr-whitesmoke);
      width: 1.5rem;
      width: '100%';
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
    }
  }

  @media (min-width: 1170px) {
    display: none;
  }
`
