import { redirect } from "next/navigation";

const Admin = () => {
  const user = false; // Replace this with your actual user check

  if (!user) {
    // Use a valid URL for the redirect
    redirect("/login"); // This should work in the App Router context
  }

  return <div>Admin Page</div>;
};

export default Admin;
