import { useState } from "react";
import fetch from "isomorphic-unfetch";

const useCallPalmApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callPalmApi = async () => {
    console.log('HEREEEEE!' )
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://us-central1-my-project.cloudfunctions.net/call-palm-api"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
        console.log('response', err)
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, callPalmApi };
};

export default useCallPalmApi;
