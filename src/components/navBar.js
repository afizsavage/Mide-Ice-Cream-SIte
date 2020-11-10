import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Searcbar from "./searchdown.js"
import Location from "./location"
import Navlinks from "./navlinks.js"

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
          <Navlinks />
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
