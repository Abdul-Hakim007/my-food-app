import React from 'react';
import { Card } from 'react-bootstrap';
import './Meal.css'

const Meal = (props) => {
    const {strMeal,strMealThumb,strInstructions}=props.meal;
    return (
        <div>
            <Card >

                <Card.Img className='card-image' variant='top' src={strMealThumb}></Card.Img>
                <Card.Text className='heading'>{strMeal}</Card.Text>
                <Card.Text>{strInstructions.slice(0,100)}</Card.Text>

            </Card>
        </div>
    );
};

export default Meal;