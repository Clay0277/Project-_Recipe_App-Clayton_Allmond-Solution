import React from "react";

function Recipe({ recipe, index, handleDelete }) {
  return (
    <tr className="recipes">
      <td>
        <p>{recipe.name}</p>
      </td>
      <td>
        <p>{recipe.cuisine}</p>
      </td>
      <td>
        <img src={recipe.photo} alt="food-img" />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" id={index} onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Recipe;
