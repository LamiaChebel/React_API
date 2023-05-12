import { React , useReducer} from "react";
import { reducer } from "../Hooks/reducer.js";
import Form  from "./Form.jsx";

export const initialState = { alias: "", age: 0, isAdmin: false }; //Initialisation de l'état initial de la state du reducer

function User() {

    const [state, dispatch] = useReducer(reducer, initialState);//on utilise useReducer pour mettre à jour plusieurs données dans un objet
//state = état mise à jour, dispatch = callback qui met à jour state ; reducer :[state, dispatch] --> fonction ; initialstate = état de départ
    // console.log(state);


    //Appel le composant Form qui a comme props reducer la fonction de mise à jour de nos données => passé en attribut
    //On retourne une liste qui va afficher la mise à jour de notre objet state en fonction de nos valeurs d'entrées dans le formulaire
    //on met une ternaire qui va vérifier la valeur de la state et selon la valeur , nous avons un rendu dynamique
    // mise à jour s'effectue après le montage de notre composant donc les valeurs se mettent à jour après l'affichage du body
    return (
        <>
            <Form reducer={[state, dispatch]} />
            <ul>
                <li>I am {state.alias || "..."}.</li>
                <li>I have {state.age || "..."} years old.</li>
                <li>{state.isAdmin ? `I am an admin.` : `I am not an admin.`}</li>
            </ul>

        </>

    )
}

export default User;