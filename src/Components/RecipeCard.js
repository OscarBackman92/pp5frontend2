import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  );
};

export default RecipeCard;
