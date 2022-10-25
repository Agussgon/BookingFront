import { useState, useEffect } from "react";

/* consulta: prefieren axios por algún motivo? */
const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((err) => setErrorMessage(err.message))
      .finally(setLoading(false));
  }, []);

  return { data, loading, errorMessage };
};

export default useFetch;
