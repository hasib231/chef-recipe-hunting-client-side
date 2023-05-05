import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCart from '../../../Components/ChefCart';
import { Row } from 'react-bootstrap';
import { Spinner } from "react-bootstrap";

const Chefs = () => {
  const chefCart = useLoaderData();
  if (!chefCart) {
    return <Spinner animation="border" variant="success" />;
  }
  console.log(chefCart);

    return (
      <div className="container my-section-bg">
        <div className="text-center w-50 m-auto py-5">
          <h1>Best Chefs in Canada</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            molestiae dignissimos non quidem quisquam odio obcaecati tempore
            reiciendis optio pariatur.
          </p>
        </div>
        <Row md={3} className="g-5 container">
          {chefCart.map((chef) => (
            <ChefCart key={chef.id} chef={chef}></ChefCart>
          ))}
        </Row>
      </div>
    );
};

export default Chefs;