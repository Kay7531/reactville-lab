import { useState } from "react";
import IndgredientList from "../IndgredientList/IndgredientList";
import BurgerStack from "../BurgerStack/BurgerStack";
import Ingredient from "../Indgredient/Indgredient";





const BurgerShop = (props) => {
    const ingredients=["Beef Patty", "Soy Patty", "Black Bean Patty","Chicken Patty", "Lettuce", "Tomato", "Bacon", "Onion", "Cheddar Cheese", "Swiss Cheese", "Kaiser Bun", "Sesame Bun", "Gluten Free Bun", "Lettuce Wrap"]

    const [stack, setStack] = useState([])

    const addToBurger = (ingredient) => {
        setStack([...stack, ingredient])
      }
      const removeFromBurger = (idx) => {
        setStack(stack.filter((ing, i) => i !== idx))
      }
      

    
    return (
        <>
        <section>
            <h1>BurgerShop</h1>
            <button onClick={() => setStack([])}>Clear Order</button>


            <IndgredientList ingredients={ingredients} addToBurger={addToBurger}/>
            <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
        </section>
        </>
    );
}

export default BurgerShop;