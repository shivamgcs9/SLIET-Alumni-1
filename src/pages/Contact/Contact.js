import React from "react";
import "./contact.css";
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {

  return (
    

    <>
      <Container fliud = "md">
        <Row className="align-items-center">
          <Col>
            <form className="cform">
              <h1>Contact Us 🤳</h1>

              <label>Name</label>
              <input
                placeholder="Name"

              />

              <label>Email</label>
              <input
                placeholder="Email"

              />

              <label>Message</label>
              <textarea
                placeholder="Message"

              ></textarea>

              <cbutton type="submit">Submit</cbutton>
            </form>
          </Col>
          <Col class = "center">
          <div id="contact-us-map"style={{ align: "center" }} >
            <iframe style={{ align: "center" }} id="contact-up-map-iframe" title="abc" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.550107202312!2d75.69747015002451!3d30.22138548172901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910f8bd26a61ba3%3A0xa45e3a23dfc09f9b!2sSant%20Longowal%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1637840973003!5m2!1sen!2sin" class = "center" width="450" height="350"/>
          </div>
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default Contact;