import React from "react"
import { Nav } from "react-bootstrap"
import { Link } from "gatsby"
const Navlinks = ({ pageInfo }) => {
  return (
    <Nav className="mr-auto ml-auto" activeKey={pageInfo && pageInfo.pageName}>
      <ul className="list-group list-group-horizontal-md list-unstyled">
        <li className="dropdown">
          <Link to="/page-2" className="navlink text-decoration-none">
            FLAVOURS
          </Link>
          <ul id="flavours" className="dropdown-content list-unstyled">
            <li>
              <Link to="flavours/milo" className="text-decoration-none">
                <span>Milo Choco</span>
              </Link>
            </li>
            <li>
              <Link to="flavours/milo" className="text-decoration-none">
                <span className="d-inline">Custard Pap</span>
              </Link>
            </li>
            <li>
              <Link to="flavours/milo" className="text-decoration-none">
                <span>Custard Pap</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/page-2" className="navlink text-decoration-none">
            CATERING
          </Link>
          <ul id="catering" className="dropdown-content list-unstyled">
            <li>
              <Link to="flavours/milo" className="text-decoration-none">
                Milo Choco
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/page-2" className="navlink text-decoration-none">
            VALUES
          </Link>
          <ul id="values" className="list-unstyled dropdown-content">
            <li>
              <Link to="flavours/milo" className="text-decoration-none">
                Values
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/page-2" className="navlink text-decoration-none">
            ABOUT US
          </Link>
          <ul id="contact" className="dropdown-content list-unstyled">
            <li>
              <Link to="flavours/milo" className="text-decoration-none">
                Contact Us
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </Nav>
  )
}

export default Navlinks
