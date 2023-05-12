import { React , useReducer} from "react";
import { reducer } from "../Hooks/reducer.js";
import Form  from "./Form.jsx";

export const initialState = { alias: "", age: 0, isAdmin: false };

function User() {

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);

    return (
        <>
            <Form reducer={[state, dispatch]} />
            <ul>
                <li>I am {state.alias || "..."}.</li>
                <li>I have {state.age || "..."} years old.</li>
                <li>{!state.isAdmin ? `I am an admin.` : `I am not an admin.`}</li>
            </ul>

        </>

    )
}

export default User;