import React from "react";
import UserList from "../components/userList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Zara",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
      placeCount: 3,
    },
  ];

  return <UserList items={USERS} />;
};
export default Users;
