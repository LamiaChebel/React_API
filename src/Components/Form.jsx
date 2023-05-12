import React from "react";

//Le composant Form va passer en argument la fonction reducer
function Form({ reducer: [state, dispatch] }) {

// fonction qui va mettre à jour la state en vérifiant le type et la valeur s'il y en a une
    function handlerAlias(e) {
        dispatch({ type: "entries", payload: e.target.value });
    }

    function handlerAge(e) {
        dispatch({ type: "entries", payload: e.target });
    }

    function handlerCheckbox(e) {
        dispatch({ type: "isAdmin", payload: e.target });
    }

    function handlerSubmit(e) {
        e.preventDefault();
        dispatch({ type: "submit" });
    }

    //On affiche le formulaire avec nos 5 entrées, chaque entrée est soumis à un gestionnaire d'évènements
    //input alias : à chaque saisie de la valeur de l'alias, cela va appeler la fonction handleAlias et la valeur entrée est enregistrée dans la state
    // idem inputs age et isAdmin
    //input submit : soumettre toutes les valeurs entrées dans les différents champs
    return (
        <form action="" method="get" onSubmit={handlerSubmit}>
            <fieldset>
                <input type="text" name="alias" id="alias" value={state.alias} onChange={handlerAlias} placeholder="Entrer votre alias :" aria-placeholder="Votre alias" />

                <input type="number" name="age" id="age" value={state.age} onChange={handlerAge} placeholder="Entrer votre âge :" aria-placeholder="Votre âge" />

                    <label htmlFor="Admin">Are you an Admin ?
                    <input type="radio" name="isAdmin" id="Admin" value="Yes" onChange={handlerCheckbox} placeholder="Sélectionner si vous êtes l'admin" checked={state.isAdmin}/> Yes
                    </label>
                    
                    <label htmlFor="notAdmin">
                    <input type="radio" name="isAdmin" id="notAdmin" value="No" onChange={handlerCheckbox} placeholder="Sélectionner si vous êtes l'admin" checked={!state.isAdmin}/> No
                    </label>


                <input type="submit" value="Send values" />
            </fieldset>
        </form>
    );
}

export default Form;

//Pour les boutons radios, le name de chaque bouton radios ou checkbox doit être identique et la valeur doit être indiqué en string
//Pour la mise à jour des entrées, elle se fait via l'attribut checked qui correspond à la sélection de notre bouton et celui-ci reçoit la valeur de la state concernée pour rendre une vue dynamique à notre composant