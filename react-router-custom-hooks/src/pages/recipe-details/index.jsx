import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Recipe Details of recipe Item {id}</h1>
    </div>
  );
};

export default RecipeDetails;
