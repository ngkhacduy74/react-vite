import { useState } from "react";

const TodoNew = (props) => {
  const { addNewTodo } = props;
  //useStateHook
  //const valueInput = "eric";
  const [valueInput, setvalueInput] = useState("eric");
  const handleClick = () => {
    addNewTodo(valueInput);
    console.log("Check value input : ", valueInput);
    setvalueInput("");
    //alert("Click me");
  };

  const handleOnChange = (name) => {
    setvalueInput(name);
  };

  return (
    <div className="input-add">
      <input
        type="text"
        className="input"
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button
        className="button"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        Add
      </button >
      <div>My text input is = {valueInput} </div>
    </div>
  );
};
export default TodoNew;
