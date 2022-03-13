import { useState, useEffect } from "react";
import DustBunny from "./DustBunny";
import Builder from "./Builder";
import Gallery from "./Gallery";
import firebase from "./firebase";
import { getDatabase, push, ref, onValue } from "firebase/database";

function App() {
  const [selectedBody, setSelectedBody] = useState(0);
  const [selectedSmile, setSelectedSmile] = useState(0);
  const [galleryDustBunnies, setGalleryDustBunnies] = useState([]);

  const database = getDatabase(firebase);
  const dbRef = ref(database);

  function submitDustBunny() {
    push(dbRef, {
      body: selectedBody,
      smile: selectedSmile,
    });
  }

  useEffect(() => {
    onValue(dbRef, (response) => {
      const dustBunnies = Object.values(response.val());
      setGalleryDustBunnies(dustBunnies);
    });
  }, []);

  return (
    <div>
      <header>
        <h1>Dust Bunny Game</h1>
      </header>
      <Builder
        body={selectedBody}
        smile={selectedSmile}
        onBodyChange={setSelectedBody}
        onSmileChange={setSelectedSmile}
      />
      <button onClick={submitDustBunny}>Submit</button>

      <DustBunny body={selectedBody} smile={selectedSmile} />
      <Gallery dustBunnies={galleryDustBunnies} />
    </div>
  );
}

export default App;
