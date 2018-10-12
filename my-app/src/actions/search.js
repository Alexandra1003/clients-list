export const search = (inputValue) => {
    return {
        type: "CLIENTS_FILTERED",
        payload: inputValue
    }
}