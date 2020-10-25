import React from "react";

import styled from "./Card.module.css";

function CardComponent(props) {
  return <div className={styled.card}>{props.children}</div>;
}

export const Card = CardComponent;
