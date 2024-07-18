import React, { useEffect, useState } from 'react';
import RecipesList from './RecipesList'
import SearchBar from './SearchBar';

const Recipes = () => {
    // TODO: 
    // - to move to ENV variable for dev (Node)
    // - to move to env.sh + env.js for prod (Nginx)
    const BASE_URL = "http://localhost:3000/recipes";

    // State to hold fetched data, loading status, and error  
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [searchTerms, setSearchTerms] = useState("");

    const updateSearchTerms = (newSearchTerms) => {
      setSearchTerms(newSearchTerms)
      setPage(1);
    }
  
    useEffect(() => {
      // Create an AbortController for managing the requests
      const abortController = new AbortController();
      const signal = abortController.signal;
  
      // Fetch data using async/await with the Fetch API
      const fetchUsingAsyncAwaitWithFetchApi = async () => {
        try {
          console.log(BASE_URL);
          const response = await fetch(`${BASE_URL}?ingredients=${searchTerms}&page=${page}`, { signal });
          const data = await response.json();
          setRecipes(data);
          setError(null);
        } catch (error) {
          if (error.name === "AbortError") {
            return; // Exit the function to prevent further error handling
          }
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchUsingAsyncAwaitWithFetchApi();
  
      // Cleanup: Abort the controller and set loading to true when the component unmounts
      return () => {
          abortController.abort(); // Cancel any ongoing requests
          setIsLoading(true); // Reset loading state
      };
    }, [BASE_URL, searchTerms, page]); // Re-run the effect when the 'page' state changes
  
    // Render the component
    if (error) {
      return <>{error.message}</>;
    } else if (isLoading) {
      return <>loading...</>;
    } else {
      return (
        <div>
          <h1>Pennylane recipes v0.1</h1>
          <SearchBar searchTerms={searchTerms} updateSearchTerms={updateSearchTerms} />
          <RecipesList recipes={recipes} />
        </div>
      );
    }    
};

export default Recipes;