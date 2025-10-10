import axios from "axios";
import { useEffect, useState } from "react";

const useAppList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/appList.json") // must be in public folder
      .then((res) => setProducts(res.data))
      .catch((err) =>
        setError({ message: err.message || "Failed to load app data" })
      )
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

export default useAppList;
