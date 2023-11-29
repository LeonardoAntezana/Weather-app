import { useState } from "react";

export const useCallApi = () => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const resolvePromise = async ( promise: Promise<any> ) => {
    setIsLoading(true);
    try {
      const result = await promise;
      setIsLoading(false);
      setData(result);
    }
    catch (error) {
      setIsLoading(false);
      throw error;
    }
  }

  const emptyData = () => setData([]);

  return { data, isLoading, resolvePromise, emptyData };

}