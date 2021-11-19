import { useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import Alert from "./components/Alert";
import Form from "./components/Form";
import Notes from "./components/Notes";
import Loader from "./components/Loader";

export default function Home() {
    const { loading, notes, fetchNotes } = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Form />
            <Alert />
            <hr />
            {loading ? <Loader /> : <Notes notes={notes} />}
        </>
    );
}
