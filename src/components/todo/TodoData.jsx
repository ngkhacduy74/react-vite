const TodoData = (props) => {
  console.log("Check props", props);
  const { todoList } = props;
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div className={`todo-item ${item}`}>
            <div>{item.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
      {/* <div>{JSON.stringify(props.todoList)}</div> */}
    </div>
  );
};
export default TodoData;
