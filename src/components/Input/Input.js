import "./Input.css";

function Input({ type, id, value, style }) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      style={style}
      className={"input"}
    />
  );
}

export default Input;
