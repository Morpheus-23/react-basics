import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { Heading } from "@chakra-ui/react";

export const App = () => {
  // clear the selection
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <>
      <Heading
        align="center"
        fontSize={{ base: "2rem", md: "4rem" }}
        marginBottom={{ base: "1rem", md: "2rem" }}
      >
        Recipe Search
      </Heading>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </>
  );
};
