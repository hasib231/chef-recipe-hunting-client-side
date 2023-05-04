import React from 'react';
import { Col } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const ChefCart = ({chef}) => {
    const {
      id,
      Chef_Picture,
      Chef_Name,
      Years_of_experience,
      Numbers_of_recipes,
      Likes,
    } = chef;
    return (
      <Col>
        <Card className="h-100 my-card-bg">
          <Card.Img className="h-75" variant="top" src={Chef_Picture} />
          <Card.Body>
            <Card.Title>{Chef_Name}</Card.Title>
            <Card.Text>Years of experience : {Years_of_experience}</Card.Text>
            <Card.Text>Numbers of recipes : {Numbers_of_recipes}</Card.Text>
            <Card.Text>Likes : {Likes}</Card.Text>
            <Button variant="primary" className="my-bg-color-2">
              <Link to={`/chef/${id}`}>View Recipes</Link>
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default ChefCart;