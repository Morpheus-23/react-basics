import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  // clear the selection
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <div className="App">
      {selectedRecipe ? (
        <p>Selected : {selectedRecipe.label}</p>
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </div>
  );
};
