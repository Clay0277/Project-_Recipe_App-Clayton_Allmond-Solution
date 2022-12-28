import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [recipes, setRecipes] = useState(RecipeData);
  const [formValue, setformValue] = useState(initialFormState);

  function handleChange(e) {
    const { name, value } = e.target;
    setformValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setRecipes((recipes) => [...recipes, formValue]);
    setformValue(initialFormState);
  }

  function handleDelete(e) {
    e.persist();
    const deleted = recipes.splice(e.target.id, 1);
    setRecipes((recipes) =>
      recipes.filter((recipe) => recipe.name !== deleted.name)
    );
  }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} handleDelete={handleDelete} />
      <RecipeCreate
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formValue={formValue}
      />
    </div>
  );
}

export default App;
