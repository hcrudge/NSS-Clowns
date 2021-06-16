const appState = {
    reservations: []
};

const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (partyReservation) => {
                // Store the external state in application state
                appState.reservations = partyReservation
            }
        )
}
export const getReservations = () => {
    return appState.reservations.map(reservation =>({...reservation}))
}

const mainContainer = document.querySelector("#container");

export const sendReservation = (userPartyReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPartyReservation)
    }

    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            // do something after the POST is finished. Stay tuned for what to put here!
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
