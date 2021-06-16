import { fetchReservations } from "./dataAccess.js"
import { CreepyClowns } from "./CreepyClowns.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(
        () => {
            mainContainer.innerHTML = CreepyClowns()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)