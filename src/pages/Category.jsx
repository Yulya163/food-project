import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getFilteredCategory} from '../api';
import {Preloader} from '../components/Preloader';

import {MealsList} from '../components/MealList';

import { useHistory } from 'react-router-dom';

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const {goBack} = useHistory();

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals))
    }, [name]);

    return (  
        <>
            <button className='btn #c2185b pink darken-2' onClick={goBack}>Go back</button>  
            {!meals.length ? <Preloader /> : <MealsList meals={meals}/> }
        </>   
    )
}

export { Category };
