export default function Notes({ notes }) {
    return (
        <ul className="list-group">
            {notes.map(note => (
                <li
                    className="list-group-item d-flex justify-content-between"
                    key={note.id}
                >
                    <div>
                        <strong style={{ paddingRight: "10px" }}>
                            {note.title}
                        </strong>
                        <small>{note.date}</small>
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm "
                    >
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    );
}
