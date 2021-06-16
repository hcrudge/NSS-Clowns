import { getReservations, deleteReservation } from "./dataAccess.js"

// creating the HTML for the Reservations List
export const Reservations = () => {
    const reservations = getReservations()
    // getting the local state of the reservations data
    const listItems =(reservation) => {
        return `<li>${reservation.parentName}
        <button class = "reservation__delete" id="reservation--${reservation.id}"> Delete </button> </li>`
    }
    let html = `<ul>
        ${reservations.map(listItems).join("")
        }
    </ul>`

return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})
