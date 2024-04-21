import React from "react";

// Initial user data
export const user = {
  email: "",
  password: "",
  isLoggedIn: false,
};

// Function to log out the user by updating isLoggedIn to false
export function logOut() {
  user.isLoggedIn = false;
}

// Creating a context with initial data and logOut function
export const AppContext = React.createContext({
  user,
  logOut,
});
