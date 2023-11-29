import { Location } from "../models"

/** 
  @param {string} locationData - The data of the location from the API;
  @returns {Location}
  */
export const locationAdapter = (locationData: any): Location => {
  return {
    name: locationData.name,
    lat: locationData.lat,
    lon: locationData.lon,
    state: locationData.state
  };
}