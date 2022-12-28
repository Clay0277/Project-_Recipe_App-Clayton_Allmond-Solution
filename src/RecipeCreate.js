import React from "react";

function RecipeCreate({ handleChange, handleSubmit, formValue }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  //const [inputValue, setInputValue] = useState("");

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <colgroup>
          <col span="3" width="10%"></col>
          <col width="30%"></col>
        </colgroup>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                id="name"
                name="name"
                value={formValue.name}
                onChange={handleChange}
                placeholder="Name"
              ></input>
            </td>
            <td>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                value={formValue.cuisine}
                onChange={handleChange}
                placeholder="Cuisine"
              ></input>
            </td>
            <td>
              <input
                type="text"
                id="url"
                name="photo"
                value={formValue.photo}
                onChange={handleChange}
                placeholder="URL"
              ></input>
            </td>
            <td className="content_td">
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                rows="2"
                cols="20"
                value={formValue.ingredients}
                onChange={handleChange}
              ></textarea>
            </td>
            <td className="content_td">
              <textarea
                name="preparation"
                placeholder="Preparation"
                rows="2"
                cols="20"
                value={formValue.preparation}
                onChange={handleChange}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
