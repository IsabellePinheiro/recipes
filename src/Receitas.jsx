import React from "react";

function Receitas(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#black"
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <p>My fav recipes</p>
      </header> */}
      <div className="recipe-item">
        <p style={completedStyle}>{props.item.text}</p>
      </div>
    </div>
  );
}

export default Receitas;
