import { useReducer } from "react";
import { FirebaseContext } from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";

export default function FirebaseState({ children }) {
    const initialState = {
        notes: [],
        loading: false,
    };
    const [state, dispatch] = useReducer(FirebaseReducer, initialState);
    return <FirebaseContext.Provider>{children}</FirebaseContext.Provider>;
}
