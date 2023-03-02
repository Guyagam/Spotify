import { SongPreview } from "./song-preview"



export function SongList({ station }) {
  console.log('im from song-list', station)
  return (<div>
    {station.map((item) => {
      return <SongPreview key={item._id} station={item} />
    })}

  </div>)

}