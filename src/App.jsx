import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { Center, Heading } from "@chakra-ui/react";

export const App = () => {
  // clear the selection
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <Center  flexDir="column">
      <Heading>Welcome</Heading>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </Center>
  );
};
