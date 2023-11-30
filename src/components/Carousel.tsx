import { useState } from "react"
import { Link } from "react-router-dom";
import BtsCarousel from "react-bootstrap/Carousel";
import { Location } from "../models";
import { CardLocation } from ".";

interface Props {
  locations : Location[]
}

export const Carousel = ({ locations }: Props) => {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <BtsCarousel activeIndex={index} onSelect={handleSelect}>
      {locations?.map((location, index) => (
        <BtsCarousel.Item key={index}>
          <CardLocation location={location}>
          <Link to={`/details/${location.name}`} state={{ location }}>View Details</Link>
          </CardLocation>
        </BtsCarousel.Item>
      ))}  
    </BtsCarousel>
  );
}