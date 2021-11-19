function Notes({ notes }) {
    return (
        <ul className="list-group">
            {notes.map(note => (
                <li
                    className="list-group-item d-flex justify-content-between"
                    key={note.id}
                >
                    {note.title}
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

export default Notes;
