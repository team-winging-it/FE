import React from "react";
import { Container, Card, Nav, SubmitWrapper } from "./LandingPageStyle";
import { Button } from "pcln-design-system";

const LandingPage = props => {
  return (
    <Container>
      <Nav>
        <SubmitWrapper>
          <Button className="submit-btn" color="primary" type="submit">
            Submit
          </Button>
        </SubmitWrapper>
      </Nav>
      <Card className="card-style">TEST</Card>
    </Container>
  );
};

export default LandingPage;
