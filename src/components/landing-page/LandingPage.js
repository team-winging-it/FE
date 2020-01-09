import React from "react";
import { Container, Card, Nav, SubmitWrapper } from "./LandingPageStyle";
import { Button } from "pcln-design-system";
import GamePage from "../game-page/game-page";

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
      <Card className="card-style"> <GamePage/></Card>
    </Container>
  );
};

export default LandingPage;
