import IndgredientList from "../IndgredientList/IndgredientList"

const Ingredient = (props) => {
	return (
		<ul>

			{props.ingredient}

			{props.isList
				? <button onClick={() => props.addToBurger(props.ingredient)}>+</button>
				: <button>X</button>
			}
			
		</ul>
	)
}

export default Ingredient