import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadStation } from "../Store/station.actions"



export function HomePage() {
  // const station = useSelector()
  const station = useSelector(storeState => storeState.stationModule.stations)

  useEffect(() => {
    loadStation()
  }, [])

  return (
    <div className="main-container">
      <div className="side-bar"></div>
      <div className="playlist-container">
        fdfgdf
      </div>
    </div>
  )
}