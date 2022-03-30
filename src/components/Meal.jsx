import {Link} from 'react-router-dom';

function Meal(props) {
    const { idMeal, strMealThumb, strMeal } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span> 
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className='btn #689f38 light-green darken-2'>Watch recipe</Link>
            </div>
        </div>
    ) 
}

export { Meal };