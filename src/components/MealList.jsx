import {Meal} from './Meal';

function MealsList({meals}) {
    return (
        <div className="List" style={{display: 'flex', margin: '20px 0', flexWrap: 'wrap'}}>
            {meals.map(el => (
                <Meal key={el.idMeal} {...el} />
            ))}
        </div>
    ) 
}

export { MealsList };