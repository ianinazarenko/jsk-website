import { useState, SyntheticEvent } from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Tabs, Tab } from '@mui/material'
import { Link } from 'react-router-dom'

export default function MobileSidebar() {
  const [tabIndex, setTabIndex] = useState(0)

  function onChange(e: SyntheticEvent, newValue: number) {
    setTabIndex(newValue)
  }

  return (
    <Container>
      <div className='login-icon-container'>
        <AccountCircleIcon />
      </div>
      <Tabs
        value={tabIndex}
        variant='scrollable'
        scrollButtons='auto'
        className='tabs'
        onChange={onChange}
      >
        <Link to='/'>
          <Tab value={0} label='Главная' />
        </Link>
        <Link to='/documents'>
          <Tab value={1} label='Документы' />
        </Link>
        <Link to='/news'>
          <Tab value={2} label='Новости' />
        </Link>
        <Link to='/contacts'>
          <Tab value={3} label='Контакты' />
        </Link>
      </Tabs>
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--clr-dark);
  color: var(--clr-white);
  /* color: var(--clr-light); */
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding-left: 1.25rem;

  .login-icon-container {
    line-height: 1;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    border-right: 1px solid var(--clr-light);
    padding-right: 0.75rem;
  }

  .tabs {
    /* margin-left: 0.25rem; */
    a button {
      color: var(--clr-white);
      opacity: 1;
      /* color: red; */
      /* font-weight: 700; */
    }

    .MuiTabs-indicator {
      background-color: var(--clr-light);
      background-color: transparent;
      /* height: 6px; */
      display: flex;
      justify-content: center;
    }

    .MuiTabs-indicatorSpan {
      background-color: red;
      max-width: 20px;
      width: '100%';
    }
  }
`
