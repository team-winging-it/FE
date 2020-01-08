import React from "react";
import { useHistory } from 'react-router-dom';
import { Container, Card, Nav, SubmitWrapper } from "./LandingPageStyle";
import { Button } from "pcln-design-system";
import Login from "../auth/login"


const LandingPage = props => {

  const handleLogin = () => {
    

  }

  const handleRegister = () => {

  }

  return (
    <Container>
      <Nav>
        <SubmitWrapper>
          <Button className="submit-btn" color="primary" type="submit" onClick={handleLogin}>
            Login
          </Button>
          <Button className="submit-btn" color="primary" type="submit" onClick={handleRegister}>
            Register
          </Button>
        </SubmitWrapper>
      </Nav>
      <Card className="card-style">
        <Card className="new-card">
          <img />
          <h3>New Card</h3>
          <p>Hello World</p>

        </Card>
        <Card className="new-card">
          <img />
          <h3>New Card</h3>
          <p>Hello World</p>

        </Card>
        <Card className="new-card">
          <img />
          <h3>New Card</h3>
          <p>Hello World</p>

        </Card>
        <Card className="new-card">

        </Card>
      </Card>
    </Container>
  );
};

export default LandingPage;
