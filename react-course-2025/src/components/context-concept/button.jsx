import { useContext } from "react";
import { GlobalContext } from "../../context";

const ContextButtonComponent = () => {
  const { handleChangeThemeOnButtonClick } = useContext(GlobalContext);
  return (
    <div>
      <button onClick={handleChangeThemeOnButtonClick}>Change Theme</button>
    </div>
  );
};

export default ContextButtonComponent;
