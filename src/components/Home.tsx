import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <section>
      <div className="home-jumbotron">
        <Container>
          <h1>Welcome to Fake Restaurant</h1>
          <p>Experience fine dining like never before</p>
          <Button variant="primary">Learn More</Button>
        </Container>
      </div>
    </section>
  );
};

export default Home;
