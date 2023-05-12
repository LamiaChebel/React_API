import React,{useReducer} from "react";
import { reducer} from "../Hooks/reducer.js";

const initialState = { alias: "", age: null, isAdmin: false };


function Form () {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);

    function handlerAlias(e){
        e.preventDefault();
        dispatch({type : "text", payload : e.target.value});
    }
    

    return(
        <form action="" method="post" onSubmit={handlerSubmit}>
            <fieldset>
                <input type="text" name="alias" id="alias" value={value} onChange={handlerAlias} placeholder="Entrer votre alias :" aria-placeholder="Votre alias"/>
                <input type="number" name="age" id="age" value={value} placeholder="Entrer votre âge :" aria-placeholder="Votre âge"/>
                <input type="checkbox" name="admin" id="admin" value={value} placeholder="Sélectionner si vous êtes l'admin" />
                <input type="submit" value="Send" />
            </fieldset>
        </form>
    );
}

export default Form;