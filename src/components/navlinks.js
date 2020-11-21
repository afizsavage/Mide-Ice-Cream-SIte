import React from "react"
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
  const lists = props.lists
  const contentItems = lists.map((index, list) => {
    return <ListItem key={list} LinkName={index} />
  })
  return (
    <li className="dropdown">
      <Link to={props.path} className="navlink text-decoration-none">
        {props.name}
      </Link>
      <ul className="dropdown-content list-unstyled">{contentItems}</ul>
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

export default Navlinks
