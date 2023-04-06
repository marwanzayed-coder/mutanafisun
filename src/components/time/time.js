import "./time.css";

function Time({ data, time }) {
  return (
    <>
      <div className="time-card">
        <p className="data">{data}</p>
        <p>{time}</p>
      </div>
    </>
  );
}

export default Time;
