import "./App.css";
import CountValue from "./counter-app/count-value";
import ManageCounter from "./counter-app/manage-counter";
import ProductList from "./counter-app/product-list";
function App() {
  return (
    <div>
      <h1>React Zustand</h1>
      <CountValue />
      <ManageCounter />
      <ProductList />
    </div>
  );
}

export default App;
