import React, { useState } from "react";
import Suggestion from "./suggestionList";
import { Grid, Box, Container } from "@material-ui/core";
import "./style.css";
import { SuggestionData } from "../utils/data";
const AutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [filterSuggestion, setFilterSuggestion] = useState();

  const handleChange = (e) => {
    let value = e.target.value;
    setInputValue(value);
    const filteredSuggestions = SuggestionData.filter((val) =>
      val.startsWith(value)
    );
    setFilterSuggestion(filteredSuggestions);
  };

  const handleSelection = (selectedVal) => {
    setInputValue(selectedVal);
    setFilterSuggestion([selectedVal]);
  };

  return (
    <Container>
      <Grid md={12} item>
        <h1>React Task</h1>
        <Box m={1} className="topBox">
          <Grid md={12} container item className="input_div">
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
          style={{
            display: filterSuggestion?.length <= 0 ? "grid" : "inherit",
          }}
        >
          {inputValue.length <= 0 ? (
            SuggestionData.map((obj, i) => <li key={i}>{obj}</li>)
          ) : (
            <Suggestion
              inputValue={inputValue}
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
