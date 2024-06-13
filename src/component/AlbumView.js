// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'

function AlbumView() {
    const [ albumData, setAlbumData ] = useState([])

    return (
        <div>
            <p>Album Data Goes Here!</p>
        </div>
    )
}

export default AlbumView
