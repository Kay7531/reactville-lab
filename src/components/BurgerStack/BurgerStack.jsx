import Ingredient from "../Indgredient/Indgredient";


const BurgerStack = (props) => {
    return (
        <>
            <h2>Burger Stack</h2>

            {props.stack.length ?
                <>
                    {props.stack.map((ingredient, idx) => (
                        <Ingredient 
                        key={idx} 
                        idx={idx} 
                        ingredient={ingredient} 
                        removeFromBurger={props.removeFromBurger}/>
                    ))} </>
                :
                <>
                    <h4>No ingredients to the burger yet..</h4>
                </>
            }


        </>
    );
}

export default BurgerStack;