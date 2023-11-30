import { useEffect } from "react";
import { useCallApi } from "../hooks";
import { getLocations } from "../services";
import { Carousel } from ".";
import { numRandom } from "../utilities";

export const CarouselContainer = () => {
  const { data, resolvePromise } = useCallApi();
  
  useEffect(() => {
    let letters = ['l', 'n', 's', 't', 'k'] 
    let randomNum = numRandom(0, letters.length - 1);
    resolvePromise(getLocations(letters[randomNum], 5));
   }, [])


  return (
    <div>
      <Carousel locations={data} />
    </div>
  )
}
