import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, [id]);

  return (
    <div>
      <h1>User Detail</h1>
      {user && (
        <div>
          <img src={user.avatar} alt="User Avatar" />
          <p>
            Name: {user.first_name} {user.last_name}
          </p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default DetailUser;
