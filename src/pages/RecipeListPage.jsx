import { Center, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeList } from "../components/RecipeList";
import { useState } from "react";
import { TextInput } from "../components/ui/TextInput";

export const RecipeListPage = ({ clickFn }) => {
  const availableRecipes = data.hits;

  const [searchField, setSearchField] = useState("");

  const matchedRecipes = availableRecipes.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    console.log("event: " + event.target.value);
    setSearchField(event.target.value);
  };

  return (
    <>
      <Center h="100vh" flexDir="column">
        <Heading>My Recipe App</Heading>
      </Center>
      <label>Search for recipes:</label>
      <TextInput onChange={handleChange} w={400} />
      <RecipeList recipes={matchedRecipes} clickFn={clickFn} />
    </>
  );
};
