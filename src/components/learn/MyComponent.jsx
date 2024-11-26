import "./style.css";
const MyComponent = () => {
  // const hoidanit = "duy";
  //const hoidanit = null; // kieu boolean, undefine,null khong in ra gia tri gi ca
  // const hoidanit = [1, 2, 3];
  const hoidanit = {
    name: "duy",
    age: 25,
  };

  return (
    <>
      <div>{JSON.stringify(hoidanit)} & hoidanit update</div>
      <div>{console.log("ERIC")}</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        child
      </div>
    </>
  );
};
export default MyComponent;
