import Indgredient from "../Indgredient/Indgredient";

const IndgredientList = (props) => {
    return (
        <>
        <h2> Ingredient List</h2>
        <ul>
            {props.ingredients.map((ingredient,idx) =>(
                <div key={idx} >{ingredient}</div>
            ))}
        </ul>
        </>
    );
}

export default IndgredientList;