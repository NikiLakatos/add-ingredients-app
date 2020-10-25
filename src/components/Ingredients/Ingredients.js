import React, { useState, useCallback } from "react";
import { IngredientForm } from "./IngredientForm";
import { Search } from "./Search";
import { IngredientList } from "./IngredientList";
import { ErrorModal } from "../UIComponents/ErrorModal";

const IngredientsComponent = (props) => {
  const [userIngredients, setuserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const filterIngredientHandler = useCallback((filterdIngredients) => {
    setuserIngredients(filterdIngredients);
  }, []);

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
    fetch("https://ingredients-app-app.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      Headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((data) => {
        setuserIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: data.title, ...ingredient },
        ]);
        console.log(data);
      });
  };

  const removeIngredientHandler = (ingredientId) => {
    setIsLoading(true);
    fetch(
      `https://ingredients-app-app.firebaseio.com/ingredients/${ingredientId}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        setIsLoading(false);
        setuserIngredients((prevIngredients) =>
          prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
        );
      })
      .catch((error) => {
        setError("Something went wrong!");
        setIsLoading(false);
      });
  };

  const clearError = () => {
    setError(null);
    setIsLoading(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {error ? <ErrorModal onClose={clearError}>{error}</ErrorModal> : null}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />
      <section>
        <Search onLoadIngredients={filterIngredientHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};
export const Ingredients = IngredientsComponent;
