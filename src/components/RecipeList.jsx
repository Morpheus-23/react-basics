import { RecipeItem } from "./RecipeItem";

export const RecipeList = ({ recipes, clickFn }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.recipe.label}
          recipe={recipe.recipe}
          clickFn={clickFn}
        />
      ))}
    </>
  );
};
