import "./Input.css"

export default function Input(props) {
  return props.type === "text-area" ? (
    <label className="Input">
      {props.label}
      <textarea />
    </label>
  ) : (
    <label className="Input">
      {props.label}
      <input />
    </label>
  );
}
