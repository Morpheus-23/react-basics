import { RecipeItem } from "./RecipeItem";
import { Box, SimpleGrid } from "@chakra-ui/react";

export const RecipeList = ({ recipes, clickFn }) => {
  return (
    <Box margin={{ base: "1rem", md: "3rem auto" }} maxWidth={"90%"}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="40px">
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.recipe.label}
            recipe={recipe.recipe}
            clickFn={clickFn}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
