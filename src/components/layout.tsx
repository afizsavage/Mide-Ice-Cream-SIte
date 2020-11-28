import React, { ReactNode } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Navbar from "./navBar"
import Footer from "./footer"

interface IProps {
  children: ReactNode
  pageInfo: any
}

const Layout = ({ children, pageInfo }: IProps) => (
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
              <Footer />
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
