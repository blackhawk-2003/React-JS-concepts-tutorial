import "./App.css";
import CounterButton from "./counter-example/counter-button";
import CounterValue from "./counter-example/counter-value";
import BlogList from "./blog-app/blog-list";
import AddNewBlog from "./blog-app/add-new-blog";
function App() {
  return (
    <div>
      <h1>Blog App</h1>
      {/* <CounterButton />
      <CounterValue /> */}
      <AddNewBlog />
      <BlogList />
    </div>
  );
}

export default App;
