import React from "react"
import { Link } from "gatsby"
import { ListGroup } from "react-bootstrap"
import { ImYoutube, ImFacebook, ImInstagram, ImTwitter } from "react-icons/im"

const Footer = () => {
  return (
    <footer className="d-flex flex-column">
      <div className="topFooterContent py-2">
        <div className="socialIcons">
          <Link className="icon" to="utube.com">
            <ImYoutube size={20} />
          </Link>
          <Link className="icon" to="facebook.com">
            <ImFacebook size={20} />
          </Link>
          <Link className="icon" to="instagram.com">
            <ImInstagram size={20} />
          </Link>
          <Link className="icon" to="twitter">
            <ImTwitter size={20} />
          </Link>
        </div>
      </div>
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
