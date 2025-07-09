const CommonInput = ({
  label,
  onChange,
  name,
  type,
  id,
  placeholder,
  value,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type || "text"}
        id={id}
        placeholder={placeholder || "Enter Value here"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CommonInput;
