export const SET_STATIONS = 'SET_STATIONS'


const initialState = {
  stations: [],
}

export function stationReducer(state = initialState, action) {
  let stations
  switch (action.type) {
    case SET_STATIONS:
      return { ...state, stations: action.stations }

    default:
      return state
  }
}