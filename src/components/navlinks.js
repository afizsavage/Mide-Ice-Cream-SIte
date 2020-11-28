import React, { useState, useEffect, useRef } from "react"
import { Nav } from "react-bootstrap"
import { Link } from "gatsby"

const ListItem = props => {
  return (
    <li>
      <Link to="flavours/milo" className="text-decoration-none">
        <span>{props.LinkName}</span>
      </Link>
    </li>
  )
}

const DDownNavs = props => {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef()
  //const [hovered, setHovered] = useState(false)
  const [isOpen, setisOpen] = useState(false)

  const DDownStatus = event => {
    setisOpen(true)
    console.log(`${setisOpen}`)
  }
  useOnClickOutside(ref, () => setisOpen(false))
  //const toggleHover = () => {setHovered(!hovered)}

  const lists = props.lists
  const contentItems = lists.map((index, list) => {
    return <ListItem key={list} LinkName={index} />
  })
  return (
    <li
      ref={ref}
      className={isOpen ? "dd-sm-show-below dd-sm-show" : ""}
      onMouseEnter={DDownStatus}
      //onMouseLeave={toggleHover}
    >
      <Link to={props.path} className="navlink text-decoration-none">
        {props.name}
      </Link>
      <ul className="dropdown-content dd-submenu list-unstyled">
        {contentItems}
      </ul>
    </li>
  )
}

const Navlinks = ({ pageInfo }) => {
  return (
    <Nav
      className="ml-auto mr-auto pl-5"
      activeKey={pageInfo && pageInfo.pageName}
    >
      <ul className="list-group list-group-horizontal-md list-unstyled">
        <DDownNavs lists={["Milo Choco"]} path="/page-2" name="FLAVOURS" />
        <DDownNavs
          lists={["Milo Choco"]}
          path="/page-2"
          name="SHOPS &amp; CATERING"
        />
        <DDownNavs lists={["Milo Choco"]} path="/page-2" name="VALUES" />
        <DDownNavs
          lists={["Milo Choco", "Custard tart"]}
          path="/page-2"
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
