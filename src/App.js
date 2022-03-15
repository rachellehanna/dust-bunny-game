import { useState, useEffect } from "react";
import Modal from "react-modal";
import { getDatabase, push, ref, onValue } from "firebase/database";
import DustBunny from "./DustBunny";
import Builder from "./Builder";
import Gallery from "./Gallery";
import firebase from "./firebase";
import header from "./images/header.png";
import playButton from "./images/playButton.png";
import submitButton from "./images/submitButton.png";

function App() {
  const [selectedBody, setSelectedBody] = useState();
  const [selectedSmile, setSelectedSmile] = useState();
  const [selectedAddOns, setSelectedAddOns] = useState(new Set());
  const [galleryDustBunnies, setGalleryDustBunnies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

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
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  useEffect(() => {
    onValue(dbRef, (response) => {
      const dustBunnies = Object.values(response.val());
      setGalleryDustBunnies(dustBunnies);
    });
  }, [dbRef]);

  return (
    <div>
      <Modal isOpen={isModalOpen} className="modal-content" ariaHideApp={false}>
        <img src={header} alt="Build your own dust bunny" />
        <input
          id="playButton"
          type="image"
          src={playButton}
          alt="Play button"
          onClick={() => setIsModalOpen(false)}
        />
      </Modal>

      <main>
        <nav>
          <h1>Build your own dust bunny</h1>
        </nav>
        <div className="wrapper">
          <div className="builder-and-preview">
            <div className="left-side">
              <Builder
                body={selectedBody}
                smile={selectedSmile}
                addOns={selectedAddOns}
                onBodyChange={setSelectedBody}
                onSmileChange={setSelectedSmile}
                onAddOnChange={handleAddOnChange}
              />
            </div>
            <div className="right-side">
              <p>Live preview:</p>
              <div className="preview">
                <DustBunny
                  body={selectedBody}
                  smile={selectedSmile}
                  addOns={selectedAddOns}
                />
              </div>
              <div className="submit-container">
                <input
                  id="submitButton"
                  type="image"
                  src={submitButton}
                  disabled={
                    selectedBody === undefined || selectedSmile === undefined
                  }
                  alt="Submit button"
                  onClick={submitDustBunny}
                />
              </div>
            </div>
          </div>

          <div className="gallery-section">
            <h2>Recently created - Gallery</h2>
            <p>
              <a href="#">
                View all {galleryDustBunnies.length} dust buddies {`>`}{" "}
              </a>
            </p>
          </div>
          <Gallery dustBunnies={galleryDustBunnies} />
        </div>
      </main>
      <footer>
        <div className="wrapper">
          <p>
            ©{" "}
            <a
              href="https://rachellehanna.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rachelle Hanna
            </a>{" "}
            2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
