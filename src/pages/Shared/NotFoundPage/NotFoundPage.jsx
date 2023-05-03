import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Container className="text-center mt-5 py-5 bg-light bg-gradient rounded">
        <Row>
          <Col>
            <h1 className="display-1 text-danger">404 !!!</h1>
            <p className="lead text-warning fw-bold">
              Oops! The page you are looking for does not exist.
            </p>
            <Link to="/">
              <Button className="my-button">Go Home</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFoundPage;
