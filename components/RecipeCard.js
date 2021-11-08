import React from 'react';

const RecipeCard = (props) => {

  const data = props.data;

  return (
    <div>{data.description}</div>
  );
}

export default RecipeCard;