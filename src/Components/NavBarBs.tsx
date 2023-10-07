import {Navbar, Container, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export function NavBarBs(){
  return(
    <Navbar className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav>
          <Nav.Link to='/' as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to='/CreateBlog' as={NavLink}>
            Create a Blog
          </Nav.Link>
          <Nav.Link to='/About' as={NavLink}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}