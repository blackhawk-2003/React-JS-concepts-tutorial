import { useEffect, useState } from "react";
import ProductItem from "./components/products-item";
import "./styles.css";
const ProductList = ({ name, city, dummyProductData }) => {
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  const handleFlag = () => {
    setFlag(!flag);
  };

  //handle count

  const handleCount = () => {
    setCount(count + 1);
  };

  //Use effect hook

  useEffect(() => {
    console.log("useEffect hook is called only once when the page is loaded");
    setFlag(!flag);
  }, []); //this will only run on page load once because of no dependency)

  //lets now use the useEffect for some dependency. lets use the count
  useEffect(() => {
    if (count === 10) {
      setChangeStyle(true);
    }
  }, [count]);
  return (
    <div>
      <h3 className="title">E-commerce Project</h3>
      {/* <ProductItem /> */}
      {flag ? (
        <h4>
          My name is {name} and city is {city}
        </h4>
      ) : (
        <h4>Hello</h4>
      )}
      <button onClick={handleFlag}>Show name</button>
      <h4>The count is {count}</h4>
      <button
        style={{
          backgroundColor: changeStyle ? "black" : "white",
          color: changeStyle ? "white" : "black",
        }}
        onClick={handleCount}
      >
        Increase Count
      </button>

      <ul>
        {dummyProductData.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
