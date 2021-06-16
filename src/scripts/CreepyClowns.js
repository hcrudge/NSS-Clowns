import { ReservationForm } from "./ReservationForm.js"
import { Reservations } from "./Reservations.js"

export const CreepyClowns = () => {
    return `
        <h1>Buttons and Lollipop Party Clowns</h1>
        <section class="reservationForm">
            ${ReservationForm()}
        </section>

        <section class="reservationRequests">
            <h2>Reservation Requests</h2>
            ${Reservations()}
        </section>
    `
}