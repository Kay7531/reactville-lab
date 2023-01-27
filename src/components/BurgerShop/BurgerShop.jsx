import { useState } from "react";
import IndgredientList from "../IndgredientList/IndgredientList";
import BurgerStack from "../BurgerStack/BurgerStack";





const BurgerShop = () => {
    const ingredients=["Beef Patty", "Soy Patty", "Black Bean Patty","Chicken Patty", "Lettuce", "Tomato", "Bacon", "Onion", "Cheddar Cheese", "Swiss Cheese", "Kaiser Bun", "Sesame Bun", "Gluten Free Bun", "Lettuce Wrap"]

    const [stack, setStack] = useState([])

    const addToBurger = (ingredient) => {
        setStack([...stack, ingredient])
      }

    
    return (
        <>
        <section>
            <h1>BurgerShop</h1>
            <IndgredientList ingredients={ingredients} addToBurger={addToBurger}/>
            <BurgerStack stack={stack} />
        </section>
        </>
    );
}

export default BurgerShop;