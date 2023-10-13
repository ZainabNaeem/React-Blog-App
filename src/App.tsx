import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './Pages/Home'
import { CraeteBlog } from './Pages/CraeteBlog'
import About from './Pages/About'
import { NavBarBs } from './Components/NavBarBs'
import { MenuBarProvider } from './Context/MenuBarContext'

function App() {
  return (
    <>
      <MenuBarProvider>
        <NavBarBs />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/CreateBlog" element={<CraeteBlog />}></Route>
            <Route path="/About" element={<About />}></Route>
          </Routes>
        </Container>
      </MenuBarProvider>
    </>
  )
}

export default App
