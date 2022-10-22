import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCards(emojipedia) {
  return (
    <Card
      key={emojipedia.id}
      pic={emojipedia.emoji}
      title={emojipedia.name}
      description={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCards)}</dl>
    </div>
  );
}

export default App;
