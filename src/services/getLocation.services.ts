import axios from "axios";
import { Location } from "../models";
import { locationAdapter } from "../adapters";

/** 
  @param {string} locationName - The name of the location must be string;
*/
export const getLocations = async (locationName: string, limit: number = 8): Promise<Location[]> => {
  let { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}geo/1.0/direct?q=${locationName}&limit=${limit}&appid=${import.meta.env.VITE_API_KEY}`);
  let allLocations: Location[] = data.map((location: any) => locationAdapter(location));
  return allLocations;
}