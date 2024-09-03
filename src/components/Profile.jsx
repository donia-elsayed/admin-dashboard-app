import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  const getSingleUser = async () => {
    const api_url = "https://dummyjson.com/users";
    const response = await fetch(`${api_url}/${userId}`);
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    getSingleUser();
  }, []);

  return (
    <div className="user__profile bg-indigo-300 border rounded-lg shadow-md w-full md:w-full lg:w-3/4 m-auto text-white p-4 my-5">
      <div className="rounded-full w-24 h-24 bg-white p-1 mx-auto">
        <img src={user.image} alt={user.firstName} className="w-full" />
      </div>
      <h2 className="capitalize text-center font-bold mb-4">
        {`${user.firstName} ${user.lastName} (${user.username})`}
      </h2>
      <div className="flex gap-3 flex-wrap md:flex-wrap lg:flex-nowrap">
        <div className="w-full md:w-full lg:w-[70%]  border p-4 rounded-xl mb-4">
          <h4 className="font-bold text-xl text-center mb-2">Personal Info</h4>
          <div className="flex md:justify-between flex-col md:flex-row lg:flex-col xl:flex-row">
            <div>
              <p>
                <strong className="text-lg">FirstName :</strong>{" "}
                {user.firstName}
              </p>
              <p>
                <strong className="text-lg">LastName :</strong> {user.lastName}
              </p>
              <p>
                <strong className="text-lg">Email : </strong> {user.email}
              </p>
              <p>
                <strong className="text-lg">Phone : </strong> {user.phone}
              </p>
            </div>
            <div>
              <p>
                <strong className="text-lg">Birthdate : </strong>{" "}
                {user.birthDate}
              </p>
              <p>
                <strong className="text-lg">Age : </strong> {user.age}
              </p>
              <p>
                <strong className="text-lg">Gender : </strong> {user.gender}
              </p>
              <p>
                <strong className="text-lg">University : </strong>
                {user.university}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-full lg:w-[30%]  border p-4 rounded-xl mb-4">
          <h4 className="font-bold text-xl text-center mb-2">
            Address Details
          </h4>
          <p>
            <strong className="text-lg">Addres :</strong>{" "}
            {user?.address?.address}
          </p>
          <p>
            <strong className="text-lg">City :</strong> {user?.address?.city}
          </p>
          <p>
            <strong className="text-lg">Country :</strong>
            {user?.address?.country}
          </p>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap md:flex-wrap lg:flex-nowrap">
        <div className="w-full border p-4 rounded-xl mb-4">
          <h4 className="font-bold text-xl text-center mb-2">
            Company Details
          </h4>
          <p>
            <strong className="text-lg">Company Name : </strong>
            {user?.company?.name}
          </p>
          <p>
            <strong className="text-lg">Department : </strong>
            {user?.company?.department}
          </p>
          <p>
            <strong className="text-lg">Title : </strong>
            {user?.company?.title}
          </p>
        </div>
        <div className="w-full border p-4 rounded-xl mb-4">
          <h4 className="font-bold text-xl text-center">
            Company Address Details
          </h4>
          <p>
            <strong className="text-lg">Addres : </strong>
            {user?.company?.address?.address}
          </p>
          <p>
            <strong className="text-lg">City : </strong>
            {user?.company?.address?.city}
          </p>
          <p>
            <strong className="text-lg">Country :</strong>
            {user?.company?.address?.country}
          </p>
        </div>
      </div>
      <button className=" bg-indigo-600 text-white p-2 block mx-auto rounded-xl">
        <Link to="/users">Back To Dashboard</Link>
      </button>
    </div>
  );
};

export default Profile;
