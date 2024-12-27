/* eslint-disable react/prop-types */
const TodoData = (props) => {
  // console.log("kajhsdkahsd", props);
  // const { name, age } = props;
  return (
    <div className="todo-data">
      <div>My name is {props.name}</div>
      <div>Learning React</div>
      <div>Learning Python</div>
    </div>
  );
};
export default TodoData;
