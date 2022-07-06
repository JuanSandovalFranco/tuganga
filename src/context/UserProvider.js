import React, { useEffect, useState } from "react";
import { User, userInformation } from "../utils/user";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadUser, setLoadUser] = useState(false);

  useEffect(() => {
    const userLoged = window.localStorage.getItem("user-app");

    userLoged && setUser(JSON.parse(userLoged));
  }, []);

  useEffect(() => {
    if (user != null) {
      window.localStorage.setItem("user-app", JSON.stringify(user));
    }
  }, [loadUser]);

  const Login = (data) => {
    setLoadUser(true);

    let dataUser = {};

    User(data)
      .then((res) => {
        if (res) {
          dataUser = Object.assign({
            token: res.token,
            username: res.user_nicename,
          });
        }

        userInformation(res.user_nicename).then((response) => {
          
          const userImage = Object.values(response[0].avatar_urls);

          dataUser = Object.assign({
            ...dataUser,
            imageUser: userImage[2],
          });

          setUser(dataUser);

          setLoadUser(false);
        });

        
      })
      .catch((err) => console.log(err));
  };

  const LogOut = () => {
    setUser(null);
    window.localStorage.removeItem("user-app");
  };

  const data = {
    loadUser,
    user,
    Login,
    LogOut, 
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;
