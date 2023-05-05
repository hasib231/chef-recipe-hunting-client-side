import React from 'react';
import { Row, Col, Card, Button } from "react-bootstrap";

const FoodItem = () => {
    return (
      <div>
        <div className="container my-section-bg">
          <div className="text-center w-50 m-auto py-5">
            <h1 className="mt-5 my-color-1">Popular Food Item Here</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestiae dignissimos non quidem quisquam odio obcaecati tempore
              reiciendis optio pariatur.
            </p>
          </div>
          <Row md={3} className="g-5 container">
            <Col>
              <Card className="h-100 my-card-bg">
                <Card.Img
                  className="h-75"
                  variant="top"
                  src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=1380&t=st=1683303189~exp=1683303789~hmac=db5d8f4fc2a4d08b0a17603ac3b9c2de15529cc0e140d05cf6ba68651388e8ce"
                />
                <Card.Body>
                  <Card.Title>Chicken skewers with slices</Card.Title>
                  <h5 className="my-4">$15.00</h5>
                  <Button
                    variant="primary"
                    className="my-bg-color-2 my-color-2"
                  >
                    Order now
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="h-100 my-card-bg">
                <Card.Img
                  className="h-75"
                  variant="top"
                  src="https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=1380&t=st=1683303288~exp=1683303888~hmac=76bf65d5fff104dbba90b818bebd9f799648e5b8d84df569cde165ec45691b0a"
                />
                <Card.Body>
                  <Card.Title>pasta spaghetti with shrimps</Card.Title>
                  <h5 className="my-4">$8.50</h5>
                  <Button
                    variant="primary"
                    className="my-bg-color-2 my-color-2"
                  >
                    Order now
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="h-100 my-card-bg">
                <Card.Img
                  className="h-75"
                  variant="top"
                  src="https://img.freepik.com/free-photo/grilled-chicken-legs-barbecue-sauce-with-pepper-seeds-parsley-salt-black-stone-plate-black-stone-table_1150-37858.jpg?w=1380&t=st=1683303414~exp=1683304014~hmac=d7cf24e257543053daf82acc48a058670ce3c892b4264e624afd5800f94656bb"
                />
                <Card.Body>
                  <Card.Title>Grilled chicken legs</Card.Title>
                  <h5 className="my-4">$19.36</h5>
                  <Button
                    variant="primary"
                    className="my-bg-color-2 my-color-2"
                  >
                    Order now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="primary" className="my-bg-color-2 my-color-2 my-5">
              Show more
            </Button>
          </div>
        </div>
      </div>
    );
};

export default FoodItem;