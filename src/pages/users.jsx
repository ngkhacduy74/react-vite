import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";

const UsersPage = () => {
  return (
    <div>
      Users Page
      <div>
        <UserForm />
        <UserTable />
      </div>
    </div>
  );
};
export default UsersPage;
