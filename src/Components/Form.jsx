import React from "react";

function Form({ reducer: [state, dispatch] }) {

    function handlerAlias(e) {
        dispatch({ type: "entries", payload: e.target });
    }

    function handlerAge(e) {
        dispatch({ type: "entries", payload: e.target });
    }

    function handlerCheckbox(e) {
        dispatch({ type: "isAdmin", payload: e.target });
    }

    function handlerSubmit(e) {
        e.prventDefault();
        dispatch({ type: "send" });
    }

    return (
        <form action="" method="get" onSubmit={handlerSubmit}>
            <fieldset>
                <input type="text" name="alias" id="alias" value={state.alias} onChange={handlerAlias} placeholder="Entrer votre alias :" aria-placeholder="Votre alias" />

                <input type="number" name="age" id="age" value={state.age} onChange={handlerAge} placeholder="Entrer votre âge :" aria-placeholder="Votre âge" />

                    <label htmlFor="notAdmin">Are you an Admin ?
                    <input type="checkbox" name="Admin" id="Admin" value="Yes" onChange={handlerCheckbox} placeholder="Sélectionner si vous êtes l'admin" /> Yes
                    <input type="checkbox" name="notAdmin" id="notAdmin" value="No" onChange={handlerCheckbox} placeholder="Sélectionner si vous êtes l'admin" /> No
                    </label>


                <input type="submit" value="Send values" />
            </fieldset>
        </form>
    );
}

export default Form;