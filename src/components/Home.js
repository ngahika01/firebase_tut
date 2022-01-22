import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { user, logout } = useUserAuth();
  const logOut = async () => {
    await logout();
    try {
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <Card className="">
              <Card.Body>
                <Card.Text>Hello and welcome {user && user.email}</Card.Text>
                <Button variant="warning" onClick={logOut}>
                  Logout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
