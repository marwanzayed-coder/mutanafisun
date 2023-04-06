import "./CheckInput.css";

function CheckInput({ value }) {
  return (
    <div className="check-content">
      <input type={"checkbox"} />
      <p>{value}</p>
    </div>
  );
}

export default CheckInput;
