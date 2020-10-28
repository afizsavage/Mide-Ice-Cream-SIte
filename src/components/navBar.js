import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { AiOutlineUserAdd, AiOutlineEnvironment } from "react-icons/ai"
import Searcbar from "./searchdown.js"

const CustomNavbar = ({ pageInfo }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(pageInfo)
  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        id="site-navbar"
        className="sticky-top"
      >
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span" className="logo">
            <Img
              id="logo"
              fixed={data.file.childImageSharp.fixed}
              alt="Mide's Ice Cream"
            />
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
              <div className="dropdown-content col-md-1">
                <ul className="list-unstyled">
                  <li>
                    <Link to="flavours/milo" className="text-decoration-none">
                      Milo Choco
                    </Link>
                  </li>
                  <li>
                    <Link to="flavours/milo" className="text-decoration-none">
                      Custard Tart
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dropdown">
              <Link to="/page-2" className="text-decoration-none">
                <Nav.Link as="span" eventKey="page-2" className="dropbtn">
                  CATERING
                </Nav.Link>
              </Link>
              <div className="dropdown-content">
                <ul className="list-unstyled">
                  <li>
                    <Link to="flavours/milo" className="text-decoration-none">
                      Milo Choco
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dropdown">
              <Link to="/page-2" className="text-decoration-none">
                <Nav.Link as="span" eventKey="page-2" className="dropbtn">
                  VALUES
                </Nav.Link>
              </Link>
              <div className="dropdown-content">
                <ul className="list-unstyled">
                  <li>
                    <Link to="flavours/milo" className="text-decoration-none">
                      Values
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dropdown">
              <Link to="/page-2" className="text-decoration-none">
                <Nav.Link as="span" eventKey="page-2" className="dropbtn">
                  ABOUT US
                </Nav.Link>
              </Link>
              <div className="dropdown-content">
                <ul className="list-unstyled">
                  <li>
                    <Link to="flavours/milo" className="text-decoration-none">
                      Contact Us
                    </Link>
                  </li>
                </ul>
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
