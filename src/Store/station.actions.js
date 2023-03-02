import { stationService } from "../services/station.services"
import { SET_STATIONS } from "./station.reducer"
import { store } from "./store"




export function loadStation() {
  try {
    let stations = stationService.getStation()
    // console.log(stations)
    store.dispatch({ type: SET_STATIONS, stations })

  } catch (err) {
    console.log('Had issues loading station', err)
    throw err
  }
}