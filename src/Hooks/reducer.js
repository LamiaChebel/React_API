function reducer(state, action){

    console.log("state", state);
    console.log("action", action);

    switch (action.type) {
        case "text":
            console.log(state.alias);
           
            return { alias: state.alias};
            case "number":
                console.log(state.age);
                return { age: state.age};

                case "checkbox":
                    console.log(state.isAdmin);
                    return {isAdmin: state.isAdmin};
        
        default:
            // return {...state};
            throw new Error("unknown action");
    }

}

export { reducer };