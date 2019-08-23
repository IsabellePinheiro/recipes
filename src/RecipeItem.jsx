import React from "react";

function RecipeItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <div className="recipe-item">
      <p style={completedStyle}>{props.item.text}</p>
    </div>
  );
}

export default RecipeItem;
