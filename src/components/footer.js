import React from "react"
import { Link } from "gatsby"
import { ListGroup, Form, Row, Col, Button } from "react-bootstrap"
import { ImYoutube, ImFacebook, ImInstagram, ImTwitter } from "react-icons/im"

const Footer = () => {
  return (
    <footer className="d-flex flex-column">
      <div className="d-flex flex-column overflow-hidden topFooterContent py-4">
        <Row className="row connect">
          <Col sm className="contact pt-md-3 justify-content-center pr-md-5">
            {" "}
            <div className="inner-contact col-md-8 offset-lg-6 col-lg-6">
              <h3>Connect with Us</h3>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>How can we help you?</Form.Label>
                  <Form.Control className="contact-select" as="select">
                    <option>Select</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col sm className="newsletter pt-md-3 pb-4 pl-lg-5">
            {" "}
            <div className="inner-newsletter col-lg-10">
              <h3>It's Like Dessert For Your Inbox</h3>
              <Form>
                <Form.Row controlId="exampleForm.ControlInput1">
                  {" "}
                  <Form.Label className="col-lg-11">
                    Sign Up For Our Email Newsletter And Get The Inside Scoop{" "}
                  </Form.Label>
                  <Col lg={6}>
                    <Form.Control
                      className="mail"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </Col>{" "}
                  <Col lg={1}>
                    <Button
                      className="b-white bg-white text-primary"
                      type="submit"
                    >
                      Subscribe
                    </Button>
                  </Col>
                </Form.Row>
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
        Privacy &amp; Terms
      </p>
    </footer>
  )
}

export default Footer
