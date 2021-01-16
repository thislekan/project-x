const access_token = sessionStorage.getItem("access_token");
const refresh_token = sessionStorage.getItem("refresh_token");

const userAuth = {
  isAuthenticated: false,
  authenticate: () => {
    if (access_token) userAuth.isAuthenticated = true;
    return userAuth.isAuthenticated;
  },
  refreshUser: () => console.log({ refresh_token }),
  signOut: () => {
    if (access_token) sessionStorage.removeItem("token");
  },
};

export default userAuth;
