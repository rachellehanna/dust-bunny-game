import { useState, useEffect } from "react";
import DustBunny from "./DustBunny";
import Builder from "./Builder";
import Gallery from "./Gallery";
import firebase from "./firebase";
import { getDatabase, push, ref, onValue } from "firebase/database";

function App() {
  const [selectedBody, setSelectedBody] = useState(0);
  const [selectedSmile, setSelectedSmile] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState(new Set());
  const [galleryDustBunnies, setGalleryDustBunnies] = useState([]);

  const database = getDatabase(firebase);
  const dbRef = ref(database);

  function submitDustBunny() {
    push(dbRef, {
      body: selectedBody,
      smile: selectedSmile,
      addOns: Array.from(selectedAddOns),
    });
  }

  function handleAddOnChange(addOn) {
    const addOnsCopy = new Set(selectedAddOns);
    if (selectedAddOns.has(addOn)) {
      addOnsCopy.delete(addOn);
      setSelectedAddOns(addOnsCopy);
    } else {
      addOnsCopy.add(addOn);
      setSelectedAddOns(addOnsCopy);
    }
  }

  useEffect(() => {
    onValue(dbRef, (response) => {
      const dustBunnies = Object.values(response.val());
      setGalleryDustBunnies(dustBunnies);
    });
  }, [dbRef]);

  return (
    <div>
      <header>
        <h1>Dust Bunny Game</h1>
      </header>
      <Builder
        body={selectedBody}
        smile={selectedSmile}
        addOns={selectedAddOns}
        onBodyChange={setSelectedBody}
        onSmileChange={setSelectedSmile}
        onAddOnChange={handleAddOnChange}
      />
      <button onClick={submitDustBunny}>Submit</button>

      <DustBunny
        body={selectedBody}
        smile={selectedSmile}
        addOns={selectedAddOns}
      />
      <Gallery dustBunnies={galleryDustBunnies} />
    </div>
  );
}

export default App;
