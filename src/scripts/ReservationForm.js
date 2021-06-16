import { sendReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userPartySize = document.querySelector("input[name='partySize']").value
        const userPartyAddress = document.querySelector("input[name='partyAddress']").value
        const userPartyDate = document.querySelector("input[name='partyDate']").value
        const userPartyLength = document.querySelector("input[name='partyLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName, 
            partySize: userPartySize,
            partyAddress: userPartyAddress,
            partyDate: userPartyDate,
            partyLength: userPartyLength
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})
export const ReservationForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent/Guardian Name:</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name:</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partySize">Number of Attendees:</label>
            <input type="number" name="partySize" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Party Location Address:</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Party Date</label>
            <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyLength">Length of Party (in Hours)</label>
            <input type="number" name="partyLength" class="input" />
        </div>

        <button class="button" id="submitReservation">Submit Reservation</button>
    `

    return html
}


