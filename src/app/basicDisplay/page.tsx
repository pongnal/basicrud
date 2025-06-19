"use client";

import React, { useEffect, useState } from "react";

interface UserData {
  _id: string;
  userEmail: string;
  phoneNumber: string;
}

//display data
const BasicDisplay = () => {
  const [users, setUsers] = useState<UserData[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3007/user");
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);


  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Display Data</h1>

      <div className="overflow-x-auto">
        <table className="border mx-auto mt-10">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone Number</th>

              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="border p-2">{user.userEmail}</td>
                <td className="border p-2">{user.phoneNumber}</td>
                <td className="border p-2">
                  <button 
                    className="w-20 bg-blue-500 text-white px-4 py-2 rounded-md mr-2 mb-2 sm:mb-0"
                  >
                    Edit
                  </button>
                  <button 
                    className="w-20 bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicDisplay;