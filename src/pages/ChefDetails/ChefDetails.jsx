import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../../Components/Recipes';
import { Row } from 'react-bootstrap';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const {
      id,
      Chef_Picture,
      Chef_Name,
      Years_of_experience,
      Numbers_of_recipes,
      Likes,
      Recipe,
      Bio
    } = chefDetails;
    return (
      <div>
        <div className="container my-section-bg">
          <div className="d-flex justify-content-center py-5">
            <div>
              <img className="w-50 rounded ms-5" src={Chef_Picture} alt="" />
            </div>
            <div className="w-50 my-card-bg p-5 rounded me-5">
              <h1>{Chef_Name}</h1>
              <h4>Numbers of recipes: {Numbers_of_recipes}</h4>
              <h4>Years of experience: {Years_of_experience}</h4>
              <h4>Likes: {Likes}</h4>
              <h5>Bio: {Bio}</h5>
            </div>
                </div>
                <h1 className='text-center mb-4 pt-4'>Recipes</h1>
          <Row md={3} className="g-5 container">
            {Recipe.map((recipe) => (
                <Recipes
                recipe={recipe}
                ></Recipes>
            ))}
          </Row>
        </div>
      </div>
    );
};

export default ChefDetails;