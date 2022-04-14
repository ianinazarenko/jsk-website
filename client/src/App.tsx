import { Routes, Route, Link } from 'react-router-dom'
import { DesktopSidebar, Footer, MobileSidebar } from './components/common'
import { Contacts, Documents, Home, News, NotFound } from './pages'

function App() {
  return (
    <div className='App'>
      {/* <DesktopSidebar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/documents' element={<Documents />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <MobileSidebar />
      <Footer />
    </div>
  )
}

export default App
