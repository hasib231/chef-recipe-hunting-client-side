import React from 'react';
import { Row,Col } from 'react-bootstrap';

const OurServices = () => {
    return (
      <div className="container my-section-bg">
        <div className="text-center w-50 m-auto py-5">
          <h1 className="mt-5 my-color-1">Our services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            molestiae dignissimos non quidem quisquam odio obcaecati tempore
            reiciendis optio pariatur.
          </p>
        </div>
        <div className="w-75 m-auto my-card-bg p-5 text-center rounded-5">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://img.freepik.com/free-vector/delivery-man-wearing-medical-maks_23-2148503788.jpg?w=2000"
                className="img-fluid rounded-circle w-100 mb-4 shadow"
                alt=""
              />
              <h3 className="my-color-1">Food delivery</h3>
              <p>Fast food delivery service</p>
            </div>

            <div className="col-md-4">
              <img
                src="https://img.freepik.com/free-photo/cute-chef-girl-uniform-showing-thumbs-up-sign-holding-empty-plate-restaurant-mascot-character-logo-pink-background-3d-illustration-cartoon_56104-1615.jpg?w=900&t=st=1683298399~exp=1683298999~hmac=4d58043507895bc0e240e270aa2e0981dfc098a88d564f5a2dd80618042e2375"
                className="img-fluid rounded-circle w-75 mb-4 shadow"
                alt=""
              />
              <h3 className="my-color-1">Chef hire</h3>
              <p>Hire the experience chef</p>
            </div>

            <div className="col-md-4">
              <img
                src="https://img.freepik.com/premium-vector/cartoon-style-restaurant-front-view_134830-719.jpg?w=2000"
                className="img-fluid rounded-circle w-100 mb-4 shadow"
                alt=""
              />
              <h3 className="my-color-1">Restaurant book</h3>
              <p>Book Restaurant for ceremony</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurServices;