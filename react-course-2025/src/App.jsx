import ClassBasedComponent from "./components/class-based-component";
import FunctionalComponent from "./components/functional-componet";
import ProductList from "./components/products";
import "./app.css";
import Users from "./components/users";
import ContextButtonComponent from "./components/context-concept/button";
import ContextTextComponent from "./components/context-concept/text";
import UseReducerExample from "./components/use-reducer-example";

const dummyProductData = [
  "Product 1",
  "Product 2",
  "Product 3",
  "Product 4",
  "Product 5",
];
function App() {
  return (
    <div>
      <h1>This is the react course 2025</h1>
      {/* <ClassBasedComponent /> */}
      {/* <FunctionalComponent /> */}

      {/* <ProductList
        name="Aditya"
        city="Dehradun"
        dummyProductData={dummyProductData}
      /> */}
      {/* <Users /> */}
      <UseReducerExample />
      {/* <ContextButtonComponent />
      <ContextTextComponent /> */}
    </div>
  );
}

export default App;
