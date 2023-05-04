import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import chefPic from '../../../assets/chef-pic.jpg'
import './Banner.css'

const Banner = () => {
    return (
      <div>
        <Container className="my-bg-color-1">
          <Row>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="w-50 text-center ">
                <h1 className="fw-bold my-color-1">
                  Rain or shine,it's time to dine
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  inventore ducimus eius consequuntur? Et harum sed adipisci
                  quis odit cupiditate.
                </p>
                <Button variant="primary" className="my-bg-color-2 my-color-2">
                  Order Now
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <Image src={chefPic} className="img-fluid"></Image>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Banner;