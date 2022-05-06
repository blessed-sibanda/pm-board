import { useState, useEffect } from "react";

export default function useDataFetching(dataSource) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(dataSource);
        const result = await response.json();
        if (result) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, [dataSource]);

  return [loading, error, data];
}
