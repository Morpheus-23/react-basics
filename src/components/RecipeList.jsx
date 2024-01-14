import { RecipeItem } from "./RecipeItem";
import { Flex } from "@chakra-ui/react";

export const RecipeList = ({ recipes, clickFn }) => {
  return (
		<Flex
			gap={16}
			w={['full', '75%']}
			flexWrap="wrap"
			flexDir={['column', 'row']}
			justify="left"
			alignItems="center"
		>
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.recipe.label}
          recipe={recipe.recipe}
          clickFn={clickFn}
        />
      ))}
    </Flex>
  );
};
