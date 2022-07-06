export const User = async (data) => {
  const user = data;

  const response = await fetch(
    "https://tugangastores.com/wp-json/jwt-auth/v1/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  const responseUser = await response.json();

  const User = responseUser.token ? responseUser : null;

  return User;
};

export const userInformation = async (username) => {
  const res = await fetch(
    "https://www.tugangastores.com/wp-json/wp/v2/users?search=" + username,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
      },
    }
  );

  const user = await res.json();

  console.log(user);
  return user;
};
