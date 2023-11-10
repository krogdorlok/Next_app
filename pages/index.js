import React from "react";
import { useState, useEffect } from "react";
import {
  fetchFromApi,
  saveToBrowser,
  fetchFromBrowser,
  deleteFromBrowser,
} from "my-app/lib/random-word-api";
const IndexPage = () => {
  const [randomWords, setRandomWords] = useState([]);

  const handleFetchFromServer = async () => {
    const words = await fetchFromApi();
    setRandomWords(words);
  };

  const handleFetchFromBrowser = async () => {
    const words = await fetchFromBrowser("randomWords");
    setRandomWords(words);
  };

  const handleSaveToBrowser = async () => {
    await saveToBrowser("randomWords", randomWords);
  };

  const handleDeleteFromBrowser = async () => {
    await deleteFromBrowser("randomWords");
    setRandomWords([]);
  };

  const handleClearData = async () => {
    setRandomWords([]);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">Random Words</h1>
      <button onClick={handleFetchFromServer}>Fetch from Server</button>
      <button onClick={handleFetchFromBrowser}>Fetch from Browser</button>
      <button onClick={handleSaveToBrowser}>Save to Browser</button>
      <button onClick={handleDeleteFromBrowser}>Delete from Browser</button>
      <button onClick={handleClearData}>Clear Data</button>
      <ul>
        {randomWords.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
