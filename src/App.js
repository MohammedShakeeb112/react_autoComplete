import { useState } from "react";
import Autocomplete from "./Autocomplete";
let filteredSuggestions = [];

function App() {
  const suggestions = ["Oranges", "Apples", "Banana", "Kiwi", "Mango"];
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [userInput, setUserInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const setFilteredSuggestions = (filteredOptions) => {
    filteredSuggestions = filteredOptions;
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
    setShowSuggestions(true);
  };

  const onClick = (suggestion) => {
    setUserInput(suggestion);
    setShowSuggestions(false);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // IF USER PRESSES ENTER KEY
      setShowSuggestions(false);
      if (activeSuggestion > -1) {
        setActiveSuggestion(0);
        setUserInput(filteredSuggestions[activeSuggestion]);
      }
    } else if (e.keyCode === 38) {
      // IF USER PRESSES UP ARROW KEY
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    }
    // IF USER PRESSES DOWN KEY, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  return (
    <div style={{textAlign: "center"}}>
      <h1>React Autocomplete Demo</h1>
      <h2>Start typing and experience the autocomplete wizardry!</h2>
      <Autocomplete
        userInput={userInput}
        onChange={onChange}
        onClick={onClick}
        suggestions={suggestions}
        showSuggestions={showSuggestions}
        onKeyDown={onKeyDown}
        activeSuggestion={activeSuggestion}
        setFilteredSuggestions={setFilteredSuggestions}
      />
    </div>
  );
}

export default App;
