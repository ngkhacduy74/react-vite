import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserApi } from "../../services/api.service";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleClickBtn = async () => {
    const res = await createUserApi(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: "create user successfully",
        description: "Tạo user thành công",
      });
    }
  };

  return (
    <div className="user-form">
      <div>
        <div>
          <span>Fullname</span>
          <Input
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <span>PhoneNumber</span>
          <Input
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
        <div>
          <Button
            type="primary"
            onClick={() => {
              handleClickBtn();
            }}
          >
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
};
export default UserForm;
