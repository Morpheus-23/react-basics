import "./RecipeItem.css";

export const RecipeItem = ({ recipe }) => {
  return (
    <button className="recipe-item">
      <img src={recipe.image} width={100} height={100} alt={recipe.label} />
      <p>{recipe.label}</p>
    </button>
  );
};
