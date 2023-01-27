import Ingredient from "../Indgredient/Indgredient";

const IndgredientList = (props) => {
    return (
        <>
            <h2> Ingredient List</h2>
            <div>
                {props.ingredients.map((ingredient, idx) => (
                    <Ingredient 
                    key={idx} 
                    isList={true} 
                    ingredient={ingredient}
                    addToBurger = {props.addToBurger}
                    />
                     
                        


                ))}

            </div>


        </>
    );
}

export default IndgredientList;