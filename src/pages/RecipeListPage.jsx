import { Center, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeList } from "../components/RecipeList";

export const RecipeListPage = () => {
  const availableRecipes = data.hits;
  return (
    <>
      <Center h="100vh" flexDir="column">
        <Heading>My Recipe App</Heading>
      </Center>
      <RecipeList recipes={availableRecipes} />
    </>
  );
};
