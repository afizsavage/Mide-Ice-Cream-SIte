/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Container, Row, Col, ListGroup } from "react-bootstrap"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col d-flex">
              <footer className="d-flex flex-column align-items-md-center align-items-sm-start">
                <ListGroup id="footer-navs" horizontal={"md"} className=" my-2">
                  <ListGroup.Item>
                    <Link to="feedback">Contact Us</Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to="terms">Terms of Use</Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to="privacy">Privacy Policy</Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to="sitemap">Sitemap</Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link to="asscssibility">Accessibility</Link>
                  </ListGroup.Item>
                </ListGroup>
                <span className="small">
                  © {new Date().getFullYear()} Mide's Ice Cream, Inc
                </span>
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
