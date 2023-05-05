import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Container className="text-center rounded">
        <Row>
          <Col>
            <img
              src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFoundPage;
