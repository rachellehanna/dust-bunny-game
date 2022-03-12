import { useState } from "react";
import DustBunny from "./DustBunny";
import Builder from "./Builder";

function App() {
  const [selectedBody, setSelectedBody] = useState(0);
  const [selectedSmile, setSelectedSmile] = useState(0);

  return (
    <div>
      <header>
        <h1>Dust Bunny Game</h1>
      </header>
      <Builder
        body={selectedBody}
        smile={selectedSmile}
        onBodyChange={(body) => setSelectedBody(body)}
        onSmileChange={(smile) => setSelectedSmile(smile)}
      />
      <DustBunny body={selectedBody} smile={selectedSmile} />
    </div>
  );
}

export default App;
