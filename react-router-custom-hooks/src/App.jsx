import { Link, useNavigate, useRoutes } from "react-router-dom";
import Recipe from "./pages/recipes";
import Comment from "./pages/comments";
import "./app.css";
import "./styles/navigation.css";
import RecipeDetails from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout";
import ReactHookForm from "./pages/react-hook-form";
import Hooks from "./pages/hooks";
import ReactQueryDemo from "./pages/react-query-demo";
//We can also create routes using useRoutes hook
//But you prefer the normal way

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "recipe-list",
          element: <Recipe />,
        },
        { path: "comment-list", element: <Comment /> },
        { path: "recipe-list/:id", element: <RecipeDetails /> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/react-hook-form",
      element: <ReactHookForm />,
    },
    {
      path: "/hooks",
      element: <Hooks />,
    },
    {
      path: "/react-query-demo",
      element: <ReactQueryDemo />,
    },
  ]);
  return element;
}

function App() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <div className="main-navigation">
        <h1 className="app-title">React Routing, Custom hooks and more</h1>
        <div className="navigation-links">
          <Link to={"home/recipe-list"} className="nav-link">
            <span className="link-icon">🍳</span>
            Alternate way to reach recipes page
          </Link>
        </div>
        <div className="navigation-buttons">
          <button
            onClick={() => {
              navigate("home/recipe-list");
            }}
            className="nav-button primary-button"
          >
            <span className="button-icon">👨‍🍳</span>
            Navigate To Recipe Page
          </button>
          <button
            onClick={() => {
              navigate("home/comment-list");
            }}
            className="nav-button secondary-button"
          >
            <span className="button-icon">💬</span>
            Navigate To Comments Page
          </button>
          <button
            onClick={() => {
              navigate("/react-hook-form");
            }}
            className="nav-button form-button"
          >
            <span className="button-icon">📝</span>
            React Hook Form
          </button>
          <button
            onClick={() => {
              navigate("/hooks");
            }}
            className="nav-button form-button"
          >
            <span className="button-icon">🔄</span>
            Use Ref, Use Callback, Use Memo
          </button>
          <button
            onClick={() => {
              navigate("/react-query-demo");
            }}
            className="nav-button form-button"
          >
            <span className="button-icon">🔄</span>
            React Query Demo
          </button>
        </div>
      </div>
      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe-list" element={<Recipe />} />
          <Route path="comment-list" element={<Comment />} />
          <Route path="recipe-list/:id" element={<RecipeDetails />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}

      <CustomRoutes />
    </div>
  );
}

export default App;
