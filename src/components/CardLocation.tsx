import { FC, ReactNode } from "react";
import { Location } from "../models";

interface CardProps {
  children?: ReactNode
  location: Location
}

export const CardLocation: FC<CardProps> = ({ children, location }) => {
  let { name, state } = location;
  return (
    <article className="card_location">
      <h2>{name}</h2>
      <p>{state}</p>
      {children}
    </article>
  )
}