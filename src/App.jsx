import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { Heading, Flex } from "@chakra-ui/react";

export const App = () => {
  // clear the selection
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <>
      <Heading
        color="blue.700"
        align="center"
        fontSize={{ base: "2rem", md: "4rem" }}
        marginBottom={{ base: "1rem", md: "2rem" }}
      >
        Recipe Search
      </Heading>
      <Flex justify="center" direction="col">
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
        ) : (
          <RecipeListPage clickFn={setSelectedRecipe} />
        )}
      </Flex>
    </>
  );
};
