import { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./component/gallery";
import SearchBar from "./component/searchBar";
import AlbumView from "./component/AlbumView";
import ArtistView from "./component/ArtistView";

// Suspense:
import { createResource as fetchData } from "./helper";

function App() {
  let [searchTerm, setSearch] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      try {
        const resource = fetchData(searchTerm);
        setData(resource);
        setMessage(`Results for "${searchTerm}"`);
      } catch (error) {
        setMessage("Error fetching data");
        console.error("Error:", error);
      }
    }
  }, [searchTerm]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  };

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Gallery data={data} />
        </Suspense>
      );
    }
  };

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderGallery()}
    </div>
  );
}

export default App;
