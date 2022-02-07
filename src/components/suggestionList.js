import React from "react";

const suggestionlist = (props) => {
  const { final_suggestion, onSelectSuggestion } = props;

  if (final_suggestion?.length > 0) {
    return final_suggestion.map((suggestion, index) => {
      return (
        <li
          key={index}
          onClick={() => onSelectSuggestion(suggestion)}
          className="filter_list"
        >
          {suggestion}
        </li>
      );
    });
  } else {
    return (
      <h3>
        No items found
        <br /> Please search with a different keyword{" "}
      </h3>
    );
  }
};

export default suggestionlist;
