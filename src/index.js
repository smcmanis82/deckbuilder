// src/index.js

import React, { useState } from "react"; // this enables JSX
import ReactDOM from "react-dom"; // this allows us to attach the APP

import axios from "axios";

import { DeckList, SearchBar, SearchResults } from "./components";
import { fetchCards } from "./api";
// import React, from "react";

const App = () => {
  const [results, setResults] = useState([]);

  fetchCards().then(console.log);

  return (
    <div id="app">
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
      <DeckList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
