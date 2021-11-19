import { useContext } from "react";
import { AlertContext } from "../../context/alert/alertContext";

function Alert() {
    const { alert, hide } = useContext(AlertContext);

    if (!alert.visible) return null;

    return (
        <div
            className={`alert alert-${
                alert.type || "warning"
            } alert-dismissible`}
        >
            <strong>Attention </strong>
            {alert.text}
            <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={hide}
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default Alert;
