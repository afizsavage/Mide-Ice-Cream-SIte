import React from "react"
import { Link } from "gatsby"
import { ListGroup, Form, Row, Col } from "react-bootstrap"
import { ImYoutube, ImFacebook, ImInstagram, ImTwitter } from "react-icons/im"

const Footer = () => {
  return (
    <footer className="d-flex flex-column">
      <div className="d-flex flex-column topFooterContent pb-4">
        <Row className="row connect">
          <Col sm className="contact justify-content-center">
            {" "}
            <div className="inner-contact col-md-8 offset-lg-6 col-lg-5">
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <h3>Connect with us</h3>
                  <Form.Label>How can we help you?</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col sm className=" newsletter">
            {" "}
            <div className="inner-newsletter">
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
        <div className="socialIcons pb-4 pt-2 my-1">
          <Link className="icon rounded-circle" to="utube.com">
            <ImYoutube size={20} />
          </Link>
          <Link className="icon rounded-circle" to="facebook.com">
            <ImFacebook size={20} />
          </Link>
          <Link className="icon rounded-circle" to="instagram.com">
            <ImInstagram size={20} />
          </Link>
          <Link className="icon rounded-circle" to="twitter">
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
