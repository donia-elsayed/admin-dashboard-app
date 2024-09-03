import { useEffect } from "react";

export const useGetUsers = (setUsers) => {
  const getAllUsers = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    setUsers(data.users);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
};
