import { redirect } from "next/dist/server/api-utils";

const Admin = () => {
  const user = false;
  if (user) {
    return <div>Admin Page</div>;
  }
  else {
    redirect("/login");
  }
};
export default Admin;
