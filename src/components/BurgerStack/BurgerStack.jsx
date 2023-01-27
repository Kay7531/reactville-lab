import Indgredient from "../Indgredient/Indgredient";


const BurgerStack = (props) => {
    return (
        <>
            <h2>Burger Stack</h2>

            {props.stack.length ?
                <>
                    {props.stack.map((part, idx) => (
                        <div key={idx} >{part}</div>
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