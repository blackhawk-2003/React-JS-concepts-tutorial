import { useContext } from "react";
import { GlobalContext } from "../../context";

const ContextTextComponent = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <h2
        style={{
          fontSize: theme === "light" ? "50px" : "100px",
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        Aditya Singh
      </h2>
    </div>
  );
};

export default ContextTextComponent;
