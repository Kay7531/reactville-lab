import { useState } from "react";
import IndgredientList from "../IndgredientList/IndgredientList";
import BurgerStack from "../BurgerStack/BurgerStack";
import { ingredients } from "../../data/burger-data";





const BurgerShop = (props) => {
    

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