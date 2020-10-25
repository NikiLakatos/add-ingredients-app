import React, { useState, useEffect, useRef } from "react";
import styled from "./Search.module.css";
import { Card } from "../UIComponents/Card";

function SearchComponents(props) {
  const { onLoadIngredients } = props;

  const [filterTitle, setFilterTitle] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (filterTitle === inputRef.current.value) {
        const query =
          filterTitle.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${filterTitle}"`;
        fetch(
          "https://ingredients-app-app.firebaseio.com/ingredients.json" + query
        )
          .then((response) => response.json())
          .then((responseData) => {
            const loadedIngredients = [];
            for (const key in responseData) {
              loadedIngredients.push({
                id: key,
                title: responseData[key].title,
                amount: responseData[key].amount,
              });
            }
            onLoadIngredients(loadedIngredients);
          });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [filterTitle, onLoadIngredients, inputRef]);
  return (
    <section className={styled.search}>
      <Card>
        <div className={styled.searchInput}>
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={filterTitle}
            onChange={(event) => setFilterTitle(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
}

export const Search = SearchComponents;
