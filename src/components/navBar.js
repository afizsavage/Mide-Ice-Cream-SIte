import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Searcbar from "./searchdown.js"
import Location from "./location"

function myFunction(e) {
  e.preventDefault()
}

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
          <Img
            id="logo"
            fixed={data.file.childImageSharp.fixed}
            alt="Mide's Ice Cream"
            className="d-block"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto ml-auto"
            activeKey={pageInfo && pageInfo.pageName}
          >
            <div className="dropdown">
              <Link
                onClick={myFunction}
                to="/page-2"
                className="text-decoration-none"
              >
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
              <Link
                onClick={myFunction}
                to="/page-2"
                className="text-decoration-none"
              >
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
              <Link
                onClick={myFunction}
                to="/page-2"
                className="text-decoration-none"
              >
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
              <Link
                onClick={myFunction}
                to="/page-2"
                className="text-decoration-none"
              >
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
            <Location />
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
