import { useReducer } from "react";
import axios from "axios";
import { FirebaseContext } from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";

const url = process.env.REACT_APP_DB_URL;

export default function FirebaseState({ children }) {
    const initialState = {
        notes: [],
        loading: true,
    };
    const [state, dispatch] = useReducer(FirebaseReducer, initialState);

    function showLoader() {
        dispatch({ type: "SHOW_LOADER" });
    }

    async function fetchNotes() {
        showLoader();
        const res = await axios.get(`${url}/notes.json`);
        const payload = Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key,
            };
        });
        dispatch({ type: "FETCH_NOTES", payload });
    }

    async function addNote(title) {
        const note = {
            title,
            date: new Date().toJSON(),
        };

        try {
            const res = await axios.post(`${url}/notes.json`, note);
            const payload = {
                ...note,
                id: res.data.name,
            };
            dispatch({ type: "ADD_NOTE", payload });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async function removeNote(id) {
        await axios.delete(`${url}/notes/${id}.json`);

        dispatch({
            type: "REMOVE_NOTE",
            payload: id,
        });
    }

    return (
        <FirebaseContext.Provider
            value={{
                showLoader,
                addNote,
                removeNote,
                fetchNotes,
                notes: state.notes,
                loading: state.loading,
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
}
