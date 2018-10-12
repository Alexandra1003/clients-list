export default function (state = null, action) {
    switch (action.type) {
        case "CLIENTS_FILTERED":
            return action.payload;

        default:
            return state;
    }
}