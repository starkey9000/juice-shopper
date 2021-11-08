import React from 'react';
import recipes from '../data';
import RecipeCard from './RecipeCard';

const RecipesGrid = (props) => {

  console.log(recipes);

  return (
    <div className="recipe-grid">
      <h1>This is the recipe grid</h1>
      <div className="grid">
        {
          recipes.map((element, index) => {
            return <RecipeCard data={element} index={index} />
          })
        }
      </div>
      <style jsx>{`
        .recipe-grid h1{
          color: green;
        }
      `}</style>
    </div>
  );
}



export default RecipesGrid;