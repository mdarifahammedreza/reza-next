// app/admin/page.js
import { redirect } from "next/navigation";

const Admin = () => {
  const user = false; // Check if the user is authenticated

  if (!user) {
    redirect("/login"); // Server-side redirect
  }

  return <div>Admin Page</div>;
};

export default Admin;
