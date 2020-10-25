import React, { useState } from "react";
import styled from "./IngredientForm.module.css";
import { Card } from "../UIComponents/Card";
import { LoadingIndicator } from "../UIComponents/LoadingIndicator";

function IngredientFormComponent(props) {
  const [enterdTitle, setenterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  function submitHandler(event) {
    event.preventDefault();
    props.onAddIngredient({ title: enterdTitle, amount: enterdAmount });
  }

  return (
    <section className={styled.ingredientForm}>
      <Card>
        <form onSubmit={submitHandler}>
          <div className={styled.formControl}>
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="text"
              onChange={(event) => setenterdTitle(event.target.value)}
              value={enterdTitle}
            />
          </div>
          <div className={styled.formControl}>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enterdAmount}
              onChange={(event) => setEnterdAmount(event.target.value)}
            />
          </div>
          <div className={styled.ingredientFormAction}>
            <button type="submit">Add Ingredient</button>
            {props.loading ? <LoadingIndicator /> : null}
          </div>
        </form>
      </Card>
    </section>
  );
}

export const IngredientForm = IngredientFormComponent;
