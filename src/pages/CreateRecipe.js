import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = { title, description, image, ingredients, instructions };
    await axiosInstance.post('/recipes/', newRecipe);
    // Redirect or update state after creating a recipe
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Recipe Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
      <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients" required />
      <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions" required />
      <button type="submit">Create Recipe</button>
    </form>
  );
};

export default CreateRecipe;
