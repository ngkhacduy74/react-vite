const TodoNew = (props) => {
  console.log("alSDN", props);
  const { addNewTodo } = props;
  //addNewTodo("Duy");
  return (
    <div className="input-add">
      <input type="text" className="input" />
      <button className="button">Add</button>
    </div>
  );
};
export default TodoNew;
