import { RecipeItem } from "./RecipeItem";

export const RecipeList = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.recipe.label} recipe={recipe.recipe} />
      ))}
    </>
  );
};
