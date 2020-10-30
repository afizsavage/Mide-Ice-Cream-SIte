import React from "react"
import { Link } from "gatsby"
import { ListGroup } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="d-flex flex-column align-items-md-center align-items-sm-start">
      <ListGroup id="footer-navs" horizontal={"md"} className="py-1 my-2">
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
      <p className="copyright mb-3">
        © {new Date().getFullYear()} Mide's Ice Cream, Inc. All Right Reserved.
        Terms &amp; Privacy
      </p>
    </footer>
  )
}

export default Footer
