import React, { useState, useEffect, useRef } from "react"
import { Nav } from "react-bootstrap"
import { Link } from "gatsby"

interface Iprops {
  lists: Array<string>
  path: string
  name: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface IListItemProps {
  LinkName: string
  key: number
}

const ListItem = ({ LinkName }: IListItemProps) => {
  return (
    <li>
      <Link to="flavours/milo" className="text-decoration-none">
        <span>{LinkName}</span>
      </Link>
    </li>
  )
}

const DDownNavs = ({ lists, path, name }: Iprops) => {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef()
  const [isOpen, setisOpen] = useState(false)

  const openDropDown = (e: any) => {
    setisOpen(true)
  }

  const closeDropDown = (e: any) => {
    setisOpen(false)
  }

  useOnClickOutside(ref, () => setisOpen(false))
  //const toggleHover = () => {setHovered(!hovered)}

  const contentItems = lists.map((list, index) => {
    return <ListItem key={index} LinkName={list} />
  })
  return (
    <li
      ref={ref}
      className={isOpen ? "dd-sm-show-below dd-sm-show" : ""}
      onMouseEnter={openDropDown}
      onMouseLeave={closeDropDown}
    >
      <Link to={path} className="navlink text-decoration-none">
        {name}
      </Link>
      <ul className="dropdown-content dd-submenu list-unstyled">
        {contentItems}
      </ul>
    </li>
  )
}

const Navlinks = () => {
  return (
    <Nav className="ml-auto mr-auto pl-5">
      <ul className="cnb-menu list-group list-group-horizontal-md list-unstyled">
        <DDownNavs
          lists={[
            "Milo Choco",
            "Custard Tart",
            "Vanilla Essence",
            "Chunky Funk",
          ]}
          path="/page2"
          name="FLAVOURS"
        />
        <DDownNavs
          lists={[
            "Home",
            "Find An Ice Cream Shop",
            "Ice Cream Catering",
            "Ice Cream Cakes",
          ]}
          path="/page2"
          name="SHOPS &amp; CATERING"
        />
        <DDownNavs
          lists={["Overview", "How We Do Business", "Issues We Care About"]}
          path="/page2"
          name="VALUES"
        />

        <DDownNavs
          lists={["Overview", "How We Make Ice Cream", "Contact Us"]}
          path="/page2"
          name="ABOUT US"
        />
      </ul>
    </Nav>
  )
}

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }

        handler(event)
      }

      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)

      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}

export default Navlinks
