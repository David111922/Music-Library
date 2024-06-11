import { startTransition, useEffect, useState } from 'react';
import Gallery from './component/gallery';
import SearchBar from './component/searchBar';
import "./App.css"

function App () {
    const [search, setSearch] = useState('');
    const [message, setMessage] = useState('Search for Music!');
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            document.title = `${search} Music`
            const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(search)}`)
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const resData = await response.json()
            if (resData.results.length > 0) {
              setData(resData.results)
            } else {
              setMessage('Not Found')
            }
          } catch (error) {
            console.error("Fetch error: ", error);
            setMessage('Failed to fetch data')
          }
        }
        if (search) {
          fetchData()
        }
      }, [search])
    
  
    const handleSearch = (e, term) => {
        e.preventDefault();
        setSearch(term);
    };

    return (

        <div>

            <SearchBar handleSearch={handleSearch} />
            {message && <p>{message}</p>}
            <Gallery data={data} />
        </div>
    );
};

export default App;
