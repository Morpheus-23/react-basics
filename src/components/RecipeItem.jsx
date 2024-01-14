import "./RecipeItem.css";

export const RecipeItem = ({ recipe, clickFn }) => {
  return (
    <button className="recipe-item" onClick={() => clickFn(recipe)}>
      <img src={recipe.image} width={100} height={100} alt={recipe.label} />
      <p>{recipe.label}</p>
    </button>
  );
};
