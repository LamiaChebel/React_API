import { initialState } from "../Components/User.jsx";

function reducer(state, action) {

    console.log("state", state);
    console.log("action", action);

    switch (action.type) {
        case "entries":
            console.log(state.alias, state.age);

            return { ...state, [action.payload.name]: action.payload.value };
        case "isAdmin":
            console.log(state.isAdmin);
            return { ...state, [action.payload.name]: action.payload.value ==="Yes" ? true:false};

        case "delete entries":
            return initialState;

        default:
            return { ...state };
    }

}

export { reducer };