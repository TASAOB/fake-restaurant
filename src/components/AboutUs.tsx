import React from "react";
import { Card } from "react-bootstrap";

const AboutUs: React.FC = () => {
  return (
    <section>
      <h2>About Us</h2>
      <Card>
        <Card.Body>
          <Card.Text>
            Welcome to Fake Restaurant! We are a fictional restaurant known for
            our delicious food and excellent service. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default AboutUs;
