const TodoNew = (props) => {
  console.log("alSDN", props);
  const { addNewTodo } = props;
  //addNewTodo("Duy");
  const handleClick = () => {
    alert("Click me");
  };
  const handleOnChange = (name) => {
    console.log(">>> OnChange Event", name);
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
      </button>
    </div>
  );
};
export default TodoNew;
