import { useEffect } from "react"




export function SongPreview({ station }) {


  console.log(station)
  return (
    <div className="playlist-card">
      <h1>{station.name}</h1>
    </div>
  )
}



