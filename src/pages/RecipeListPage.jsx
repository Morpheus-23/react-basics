import { data } from "../utils/data";
import { RecipeList } from "../components/RecipeList";
import { useState } from "react";
import { Box, Text, Input, Flex } from "@chakra-ui/react";

export const RecipeListPage = ({ clickFn }) => {
  const availableRecipes = data.hits;

  const [searchField, setSearchField] = useState("");

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
      <Box align="center">
        <Flex justify="center" align="center">
          <Text pr="3">Search for recipes:</Text>
          <Input variant="filled" onChange={handleChange} w={400} />
        </Flex>
        <RecipeList recipes={matchedRecipes} clickFn={clickFn} />
      </Box>
    </>
  );
};
