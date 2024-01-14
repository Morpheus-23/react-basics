
import { data } from "../utils/data";
import { RecipeList } from "../components/RecipeList";
import { useState } from "react";
import { TextInput } from "../components/ui/TextInput";

export const RecipeListPage = ({ clickFn }) => {
  const availableRecipes = data.hits;

  const [searchField, setSearchField] = useState('');

  const matchedRecipes = availableRecipes.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Search for recipes:</label>
      <TextInput onChange={handleChange} w={400} />
      <RecipeList recipes={matchedRecipes} clickFn={clickFn} />
    </>
  );
};
