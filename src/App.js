import React from "react";
import Login from "./components/Login";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Signup from "./components/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Router>
              <Routes>
                <Route
                  path="/home"
                  element={
                    <ProtectedRoutes>
                      <Home />
                    </ProtectedRoutes>
                  }
                />
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </Router>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
