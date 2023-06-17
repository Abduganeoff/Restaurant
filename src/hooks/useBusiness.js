import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchApi = async (term) => {
    setIsLoading(true);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      setIsLoading(false);
    } catch (err) {
      setErrorMessage("Something went wrong!");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage, isLoading];
};
