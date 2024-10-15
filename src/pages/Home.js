// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';
import RecipeCard from '../Components/RecipeCard';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axiosInstance.get('/recipes/');
      setRecipes(response.data);
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
