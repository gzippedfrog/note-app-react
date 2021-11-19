import { useContext, useState } from "react";
import { AlertContext } from "../../context/alert/alertContext";

function Form() {
    const [value, setValue] = useState("");
    const alert = useContext(AlertContext);

    function handleSubmit(event) {
        event.preventDefault();

        if (value.trim()) {
            alert.show("Note has been created", "success");
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
                    onChange={event => setValue(event.target.value)}
                />
            </div>
        </form>
    );
}

export default Form;
