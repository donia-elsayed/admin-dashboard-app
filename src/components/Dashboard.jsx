import React from "react";
import Sidebar from "./Sidebar";
import UsersTable from "./UsersTable";

const Dashboard = () => {
  const user = localStorage.getItem("userName");
  return (
    <div className="flex flex-row w-full">
      <Sidebar />
      <div className="md:w-3/4">
        <h1 className="text-4xl font-semibold mb-12 ml-8 pt-12">
          Welcome {user} to Dashboard{" "}
        </h1>
        <UsersTable />
      </div>
    </div>
  );
};

export default Dashboard;
