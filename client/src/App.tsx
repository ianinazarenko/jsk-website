import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { DesktopSidebar, Footer, MobileSidebar } from './components/common'
import { Contacts, Documents, Home, News, NotFound } from './pages'

function App() {
  return (
    <AppWrapper className='App'>
      <DesktopSidebar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/documents' element={<Documents />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <MobileSidebar />
      <Footer />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto auto;

  @media screen and (min-width: 1170px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'sidebar main'
      'sidebar footer';

    main {
      grid-area: main;
    }

    .sidebar {
      grid-area: sidebar;
    }

    footer {
      grid-area: footer;
    }
  }
`
