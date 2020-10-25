import React from "react";
import styled from "./IngredientList.module.css";

function IngredientListComponent(props) {
  return (
    <section className={styled.ingredientList}>
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li
            key={ingredient.id}
            onClick={props.onRemoveItem.bind(this, ingredient.id)}
          >
            <span>{ingredient.title}</span>
            <span>{ingredient.amount} x</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export const IngredientList = IngredientListComponent;
