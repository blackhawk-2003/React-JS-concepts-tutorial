import CommonInput from "../common-input";

const CommonForm = ({
  formControls = [],
  formData,
  setFormData,
  buttonText,
  handleSubmit,
}) => {
  const inputTypes = {
    INPUT: "input",
    Select: "select",
    TextArea: "textarea",
  };
  const renderFormElement = (getCurrentElement) => {
    let content = null;
    switch (getCurrentElement?.componentType) {
      case inputTypes.INPUT:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event) => {
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              });
            }}
          />
        );
        break;

      default:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event) => {
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              });
            }}
          />
        );
        break;
    }
    return content;
  };
  return (
    <form onSubmit={handleSubmit}>
      {formControls?.length
        ? formControls.map((singleFormElementItem) =>
            renderFormElement(singleFormElementItem)
          )
        : null}
      <div style={{ marginTop: "12px" }}>
        <button type="submit">{buttonText || "Submit"}</button>
      </div>
    </form>
  );
};

export default CommonForm;
