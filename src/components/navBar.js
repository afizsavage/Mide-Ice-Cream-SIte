import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../images/logo.png"
import { AiOutlineUserAdd, AiOutlineEnvironment } from "react-icons/ai"
import Searcbar from "./searchdown.js"

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
            <div className="dropdown">
              <Link to="/page-2" className="text-decoration-none">
                <Nav.Link as="span" eventKey="page-2" className="dropbtn">
                  FLAVOURS
                </Nav.Link>
              </Link>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropdown">
              <Link to="/page-2" className="text-decoration-none">
                <Nav.Link as="span" eventKey="page-2" className="dropbtn">
                  CATERING
                </Nav.Link>
              </Link>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropdown">
              <Link to="/page-2" className="text-decoration-none">
                <Nav.Link as="span" eventKey="page-2" className="dropbtn">
                  VALUES
                </Nav.Link>
              </Link>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropdown">
              <Link to="/page-2" className="text-decoration-none">
                <Nav.Link as="span" eventKey="page-2" className="dropbtn">
                  ABOUT US
                </Nav.Link>
              </Link>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </Nav>

          <Nav className="ml-auto">
            <Searcbar />
            <Link to="/page-2" className="dropbtn ml-3">
              <AiOutlineEnvironment size={28} />
            </Link>
            <Link to="/page-2" className="dropbtn ml-3">
              <AiOutlineUserAdd size={28} />
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
