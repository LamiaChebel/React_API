import { initialState } from "../Components/User.jsx";

// les gestionnaire d'événements se redirigent vers le Hook 
// cette fonction va permettre selon l'action mise en place par l'utilisateur
//l'enregistrement d'une donnée ou plusieurs
function reducer(state, action) {

    // console.log("state", state);
    // console.log("action", action);

    //selon l'action engendrée,
    switch (action.type) {
        //exécuter dès la saisie de nos champs alias et age avec mise à jour de la state avec les nouvelles valeurs mais non soumis
        case "entries":
            console.log(state.alias, state.age);
// retourner notre objet state pour l'affichage des données dans User avec les nouvelles valeurs
            return { ...state, [action.payload.name]: action.payload.value };
        case "isAdmin":
            console.log(state.isAdmin);
            // en fonction du bouton sélectionné, la valeur retournée sera booléenne en fonction de la valeur du bouton sélectionnée
            return { ...state, [action.payload.name]: action.payload.value ==="Yes" ? true:false};

        case "submit":
            //quand on soumet le formulaire, on revient à la valeur initiale de nos inputs
            // ce qui permet la réinitialisation des champs
            return initialState;

        default:
            //si aucune des actions ne correspondant à celle envoyer par nos entrées, 
            // on renvoie la state mise à jour si non soumis également
            return { ...state };
    }

}

export { reducer };