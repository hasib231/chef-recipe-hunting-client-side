import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Recipes = ({ recipe }) => {
  const { recipe_name, ingredients, cooking_method, rating } = recipe;
  const [accepted, setAccepted] = useState(false);

  const notify = () => toast("This recipe added to your favorite");
  const handleAccepted = event => {
        notify()
        setAccepted(true)
    
    }
  
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

            <Button
              onClick={handleAccepted}
              variant="primary"
              disabled={accepted}
              className="my-bg-color-2"
            >
              Select in Favorite
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Recipes;