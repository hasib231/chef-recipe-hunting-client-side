import React from 'react';
import { Col } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Recipes = ({ recipe }) => {
    const { recipe_name, ingredients, cooking_method, rating } = recipe;
  return (
    <div>
      <Col>
        <Card className="h-100 my-card-bg mb-5">
          <Card.Body>
            <Card.Title>Recipe Name : {recipe_name}</Card.Title>
            <h5 className="mt-4">Ingredients :</h5>
            {ingredients.map((item) => (
              <li>{item}</li>
            ))}
            <h5 className="mt-4">Cooking method :</h5>
            <p>{cooking_method}</p>

            <Button variant="primary" className="my-bg-color-2">
              Select in Favorite
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Recipes;