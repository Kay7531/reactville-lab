import IndgredientList from "../IndgredientList/IndgredientList"
import BurgerShop from "../BurgerShop/BurgerShop"

const Ingredient = (props) => {
	return (
		<ul>

			{props.ingredient}

			{props.isList
		? <button onClick={() => props.addToBurger(props.ingredient)}>+</button> 
        : <button onClick={() => props.removeFromBurger(props.idx)}>X</button>
            }
		
        </ul>
	)
}

export default Ingredient