import { useMemo } from "react"
import { useSelector } from "react-redux"
import { loadStation } from "../Store/station.actions"
import { SongList } from "../cmps/song-list"

export function HomePage() {
  // const station = useSelector()
  const station = useSelector(storeState => storeState.stationModule.stations)
  console.log('station:', station)
  useMemo(() => {
    loadStation()
  }, [])

  return (
    <div className="main-container">
      <div className="side-bar"></div>
      <div className="playlist-container">
        {station.length && <SongList station={station} />}
      </div>
    </div>

  )
}