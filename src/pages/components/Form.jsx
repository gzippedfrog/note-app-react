import { useContext, useState } from "react";
import { AlertContext } from "../../context/alert/alertContext";
import { FirebaseContext } from "../../context/firebase/firebaseContext";

function Form() {
    const [value, setValue] = useState("");
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    function handleSubmit(event) {
        event.preventDefault();

        if (value.trim()) {
            firebase
                .addNote(value.trim())
                .then(() => alert.show("Note has been created", "success"))
                .catch(() => alert.show("Unexpected error", "danger"));

            setValue("");
        } else {
            alert.show("Enter note name", "warning");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter note name"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </div>
        </form>
    );
}

export default Form;
