import { MenuBar } from '../Context/MenuBarContext'
import { Offcanvas } from 'react-bootstrap'

type MenuSideBarProps = {
  isOpen: boolean
}

export function MenuSideBar({ isOpen }: MenuSideBarProps) {
  const { closeCart } = MenuBar()

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton className="ms-auto"></Offcanvas.Header>
      <Offcanvas.Body>
        <ul>
          <li>Home</li>
          <li>Category</li>
          <li>Travel</li>
          <li>Food</li>
          <li>Technology</li>
          <li>Busniess</li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
