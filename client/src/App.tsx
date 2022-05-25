import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { DesktopSidebar, Footer, MobileSidebar, ProtectedRoute } from './components/common'
import { Contacts, Documents, Home, News, SignIn, NotFound, AddEdit, SingleNews } from './pages'
import { MenuRoutes, SystemRoutes } from './enums'
import './axios'
import UnderConstruction from './pages/UnderConstruction'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorBoundaryFallback } from './components/common'

function App() {
  function errorHandler(error: Error, errorInfo: React.ErrorInfo) {
    console.log('Error boundary: ', error, errorInfo)
  }
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback} onError={errorHandler}>
      <AppWrapper className='App'>
        <DesktopSidebar />
        <main>
          <Routes>
            <Route path={MenuRoutes.Home} element={<Home />} />
            <Route path={MenuRoutes.SingleNews} element={<SingleNews />} />
            <Route path={MenuRoutes.Documents} element={<Documents />} />
            <Route path={MenuRoutes.Contacts} element={<Contacts />} />
            <Route path={SystemRoutes.SignIn} element={<SignIn />} />
            <Route element={<ProtectedRoute user={'admin'} redirectPath={MenuRoutes.Home} />}>
              <Route path={SystemRoutes.Add} element={<AddEdit />}>
                <Route path='announcement' element={<AddEdit />} />
                <Route path='news' element={<AddEdit />} />
                <Route path='document' element={<AddEdit />} />
              </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        {/* <MobileSidebar /> */}
        <Footer />
      </AppWrapper>
    </ErrorBoundary>
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
