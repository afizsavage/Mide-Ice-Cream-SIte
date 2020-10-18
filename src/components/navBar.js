import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../images/logo.png"
import {
  AiOutlineUserAdd,
  AiOutlineEnvironment,
  AiOutlineSearch,
} from "react-icons/ai"

const NavDropDown = ({ dropDownName }) => (
  <div className="dropdown">
    <Link to="/page-2" className="text-decoration-none">
      <Nav.Link as="span" eventKey="page-2" className="dropbtn">
        {dropDownName}
      </Nav.Link>
    </Link>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
)

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            <img src={Logo} alt={"Mide's Ice Cream"} width={200} height={71} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto ml-auto"
            activeKey={pageInfo && pageInfo.pageName}
          >
            <NavDropDown dropDownName={"FLAVOURS"} />
            <NavDropDown dropDownName={"CATERING"} />
            <NavDropDown dropDownName={"VALUES"} />
            <NavDropDown dropDownName={"ABOUT US"} />
          </Nav>

          <Nav className="ml-auto">
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                <AiOutlineSearch size={28} />
              </Nav.Link>
            </Link>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                <AiOutlineEnvironment size={28} />
              </Nav.Link>
            </Link>
            <Link to="/page-2">
              <Nav.Link as="span" eventKey="page-2">
                <AiOutlineUserAdd size={28} />
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
