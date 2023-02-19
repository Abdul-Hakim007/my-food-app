import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurent.css';

const Restaurent = () => {
    const [searchText,setSearchText] = useState('');
    const [meals,setMeals]=useState([]);
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals));
    },[searchText]);
    const handleSearch = e =>{
       const searchTextValue = e.target.value;
       setSearchText(searchTextValue)
    //    console.log(searchTextValue)
    }
    return (
        <div>
        <input style={{margin:'5px'}} onChange={handleSearch} type="text" placeholder='Search your food'/>
       
        <div className='meals-container'>
            {
                meals.map((meal)=><Meal key={meal.idMeal} meal={meal}/>)
            }
        </div>
        </div>
    );
};

export default Restaurent;