import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h3>404 !! This page does not exist!!</h3>
      <Link to={"/home/recipe-list"}>Go to Recipe List Page</Link>
    </div>
  );
};

export default NotFoundPage;
