const TodoData = (props) => {
  console.log("Check props", props);
  const { todoList, deleteTodo } = props;
  const handleClick = (id) => {
    alert(id);
  };
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div className={`todo-item ${item}`}>
            <div>{item.name}</div>
            <button
              onClick={() => deleteTodo(item.id)}
              style={{ cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        );
      })}
      {/* <div>{JSON.stringify(props.todoList)}</div> */}
    </div>
  );
};
export default TodoData;
