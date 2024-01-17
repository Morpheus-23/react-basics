import { Box } from "@chakra-ui/react";
import { Button } from "../components/ui/Button";
import { RecipeView } from "../components/RecipeView";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Box justify="center" align="center" width="80%">
      <RecipeView recipe={recipe} />
      <Button mt={5} clickFn={() => clickFn()} colorScheme="teal" mr={4}>
        Back
      </Button>
    </Box>
  );
};
