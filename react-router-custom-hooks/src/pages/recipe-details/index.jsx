import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UseFetch from "../../hooks/use-fetch";
import "./styles.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!response.ok) {
          throw new Error("Recipe not found");
        }
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="recipe-details-container">
        <div className="loading-container">
          <h2>Loading recipe details...</h2>
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="recipe-details-container">
        <div className="error-container">
          <h2>Error: {error || "Recipe not found"}</h2>
          <Link to="/home/recipe-list" className="back-button">
            <span className="button-icon">←</span>
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="recipe-details-container">
      <div className="recipe-details-content">
        <div className="recipe-header">
          <Link to="/home/recipe-list" className="back-button">
            <span className="button-icon">←</span>
            Back to Recipes
          </Link>
          <h1 className="recipe-title">{recipe.name}</h1>
        </div>

        <div className="recipe-main">
          <div className="recipe-image-section">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="recipe-main-image"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x400?text=Recipe+Image";
              }}
            />
            <div className="recipe-quick-info">
              <div className="info-item">
                <span className="info-icon">⏱️</span>
                <span className="info-label">Cook Time</span>
                <span className="info-value">{recipe.cookTimeMinutes} min</span>
              </div>
              <div className="info-item">
                <span className="info-icon">👥</span>
                <span className="info-label">Servings</span>
                <span className="info-value">{recipe.servings}</span>
              </div>
              <div className="info-item">
                <span className="info-icon">🔥</span>
                <span className="info-label">Difficulty</span>
                <span className="info-value">{recipe.difficulty}</span>
              </div>
            </div>
          </div>

          <div className="recipe-info-section">
            <div className="recipe-description-section">
              <h2 className="section-title">Description</h2>
              <p className="recipe-description">{recipe.description}</p>
            </div>

            <div className="recipe-ingredients-section">
              <h2 className="section-title">Ingredients</h2>
              <ul className="ingredients-list">
                {recipe.ingredients?.map((ingredient, index) => (
                  <li key={index} className="ingredient-item">
                    <span className="ingredient-bullet">•</span>
                    <span className="ingredient-text">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="recipe-instructions-section">
              <h2 className="section-title">Instructions</h2>
              <ol className="instructions-list">
                {recipe.instructions?.map((instruction, index) => (
                  <li key={index} className="instruction-item">
                    <span className="instruction-number">{index + 1}</span>
                    <span className="instruction-text">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="recipe-tags-section">
              <h2 className="section-title">Tags</h2>
              <div className="tags-container">
                {recipe.tags?.map((tag, index) => (
                  <span key={index} className="recipe-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="recipe-nutrition-section">
              <h2 className="section-title">Nutrition Information</h2>
              <div className="nutrition-grid">
                {recipe.nutrition &&
                  Object.entries(recipe.nutrition).map(([key, value]) => (
                    <div key={key} className="nutrition-item">
                      <span className="nutrition-label">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                      <span className="nutrition-value">{value}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
