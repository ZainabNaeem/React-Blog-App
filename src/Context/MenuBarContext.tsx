import { ReactNode, createContext, useContext, useState } from 'react'
import { MenuSideBar } from '../Components/MenuBar'

type MenuBarContext = {
  openCart: () => void
  closeCart: () => void
}
type MenuBarProviderProps = {
  children: ReactNode
}

const MenuBarContext = createContext({} as MenuBarContext)

export function MenuBar() {
  return useContext(MenuBarContext)
}

export function MenuBarProvider({ children }: MenuBarProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return (
    <MenuBarContext.Provider
      value={{
        openCart,
        closeCart,
      }}
    >
      {children}
      <MenuSideBar isOpen={isOpen} />
    </MenuBarContext.Provider>
  )
}
