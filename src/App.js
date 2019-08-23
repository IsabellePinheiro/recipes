import React from "react";
import "./App.css";
import Receitas from "./Receitas";
import recipesData from "./recipesData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: recipesData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updateRecipes = prevState.recipes.map(recipe => {
        if (recipe.id === id) return recipe;
      });
      return {
        recipes: updateRecipes
      };
    });
  }

  render() {
    const recipeItems = this.state.recipes.map(item => (
      <Receitas key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return <div> {recipeItems}</div>;
  }
}

export default App;
