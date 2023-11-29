import { useState } from "react";
import { Location } from "../models";
import { getLocations } from "../services";
import { useCallApi } from "../hooks";

export const SearchContainer = () => {
  const [locationName, setLocationName] = useState<string>('');
  const { data = [], isLoading, resolvePromise, emptyData } = useCallApi();

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocationName(event.target.value);
    setTimeout(async () => { 
      if(event.target.value) await resolvePromise(getLocations(event.target.value))
      else emptyData();
    }, 1500);
  }

  return (
    <section className="search_container">
      <input type="text" value={locationName} onChange={handleSearch} />
      {isLoading ? <p>Loading...</p> : data?.map((location: Location, index: number) => <p key={index}>{location.name}</p>)}
    </section>
  )

}