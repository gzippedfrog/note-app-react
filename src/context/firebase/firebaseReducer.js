const handlers = {
    DEFAULT: state => state,
};

export default function FirebaseReducer(state, action) {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
}
