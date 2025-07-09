import { useLocation } from "react-router-dom";
import UseFetch from "../../hooks/use-fetch";
import "./styles.css";

const Recipe = () => {
  const location = useLocation();

  //to get the location of the current path

  console.log(location);
  const resultFromUseFetch = UseFetch("https://dummyjson.com/recipes");
  const { data, loading, error } = resultFromUseFetch;

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Recipe Collection</h1>
      {data?.recipes?.length > 0 ? (
        <div className="recipe-grid">
          {data.recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-image-container">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="recipe-image"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=Recipe+Image";
                  }}
                />
              </div>
              <div className="recipe-content">
                <h2 className="recipe-name">{recipe.name}</h2>
                <p className="recipe-description">{recipe.description}</p>
                <div className="recipe-meta">
                  <span className="recipe-time">
                    ⏱️ {recipe.cookTimeMinutes} min
                  </span>
                  <span className="recipe-servings">
                    👥 {recipe.servings} servings
                  </span>
                </div>
                <div className="recipe-tags">
                  {recipe.tags?.slice(0, 3).map((tag, index) => (
                    <span key={index} className="recipe-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-recipes">
          <h2>No recipes found</h2>
        </div>
      )}
    </div>
  );
};

export default Recipe;
