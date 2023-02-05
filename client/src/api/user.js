export const logIn = async (user, pass) => {
  return fetch(`/api/member/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({userName: user, password: pass}),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          "User login failed with status code: " + response.status + ""
        );
      }
    })
    .catch((error) => console.error("Error:", error));
};

export const logOut = async () => {
  return fetch(`/api/member/logout`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        "User logout failed with status code: " + response.status + ""
      );
    }
  });
};
