import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './component/gallery'
import SearchBar from './component/searchBar'
import AlbumView from './component/AlbumView'
import ArtistView from './component/ArtistView'
import { createResource as fetchData } from './helper'

function App() {
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState(null)

    const API_URL = 'https://itunes.apple.com/search?term='

    useEffect(() => {
        if(search) {
            // setData (fetchData(search))
            const fetchData = async () => {
                document.title = `${search} Music`
                const response = await fetch(API_URL + search)
                const resData = await response.json()
                if (resData.results.length > 0) {
                    return setData(resData.results)
                } else {
                    return setMessage('Not Found')
                }
            }
            fetchData()
        }
        // error searchTerm is not defined I changed it from search to searchTerm.I reverted back to search
    }, [search])
    
    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }

    return (
      <div>
      {message}
          <Router>
              <Routes>
                  <Route path="/" element={
                      <>
                          <SearchBar handleSearch = {handleSearch}/>
                          {/* <Gallery data={data} /> */}
                      </>
                  } />
                  <Route path="/album/:id" element={<AlbumView />} />
                  <Route path="/artist/:id" element={<ArtistView />} />
              </Routes>
          </Router>
      </div>
  )
  
}

export default App;

