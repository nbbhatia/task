import React, { useState } from "react";
import Suggestion from "./suggestionList";
import { Grid, Box, Container } from "@material-ui/core";
import "./style.css";
import { SuggestionData } from "../utils/data";
const AutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [filterSuggestion, setFilterSuggestion] = useState([]);
  const [selectSuggestion, setSelectSuggestion] = useState(0);
  const [displaySuggestion, setDisplaySuggestion] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    setInputValue(value);
    const filteredSuggestions = SuggestionData.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setFilterSuggestion(filteredSuggestions);
    setDisplaySuggestion(true);
  };

  const handleSelection = (index) => {
    setSelectSuggestion(index);
    setInputValue(filterSuggestion[index]);
    setFilterSuggestion([]);
    setDisplaySuggestion(false);
  };

  return (
    <Container>
      <Grid md={12} item>
        <Box m={1} className="topBox">
          <Grid
            md={12}
            container
            justifyContent="center"
            item
            className="input_div"
          >
            <input
              type="text"
              onChange={handleChange}
              value={inputValue}
              className="input_box"
            />
            <button className="button">Search</button>
          </Grid>
        </Box>
        <Box
          m={1}
          className="body_box"
          style={{ display: filterSuggestion.length <= 0 ? "grid" : "inherit" }}
        >
          {inputValue.length <= 0 ? (
            SuggestionData.map((obj, i) => <li key={i}>{obj}</li>)
          ) : (
            <Suggestion
              inputValue={inputValue}
              selectSuggestion={selectSuggestion}
              displaySuggestion={displaySuggestion}
              final_suggestion={filterSuggestion}
              onSelectSuggestion={handleSelection}
              suggestionData={SuggestionData}
            />
          )}
        </Box>
      </Grid>
    </Container>
  );
};
export default AutoComplete;
