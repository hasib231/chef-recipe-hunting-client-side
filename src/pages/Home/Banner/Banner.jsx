import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
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
              {/* <Image
                src="https://img.freepik.com/free-photo/chef-with-thumb-up-white-background_1368-2842.jpg?w=740&t=st=1683301188~exp=1683301788~hmac=95f1a851df9cb16f4b82bbb4cef66eb3d8c11d0b832c2c55c51f1e06cf941c8c"
                className="img-fluid"
                
              ></Image> */}
              <LazyLoadImage
                src="https://img.freepik.com/free-photo/chef-with-thumb-up-white-background_1368-2842.jpg?w=740&t=st=1683301188~exp=1683301788~hmac=95f1a851df9cb16f4b82bbb4cef66eb3d8c11d0b832c2c55c51f1e06cf941c8c"
                className="img-fluid"
              ></LazyLoadImage>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Banner;