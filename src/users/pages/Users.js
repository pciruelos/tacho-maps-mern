import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ciru",
      image: "https://f.nordiskemedier.dk/2esm1ipu08eqi41b_660_479.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
