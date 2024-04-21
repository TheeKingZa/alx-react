import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  // State variables for login status, email, password, and submit button enable/disable
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  // Function to handle form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  // Function to handle email input change
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle password input change
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // Effect to enable/disable submit button based on email and password inputs
  useEffect(() => {
    if (email !== "" && password !== "") {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          {/* Submit button with disabled attribute based on enableSubmit state */}
          <input type="submit" value="Ok" disabled={!enableSubmit} />
        </form>
      </div>
    </React.Fragment>
  );
}

// Styles for the component using aphrodite
const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  input: {
    margin: "10px",
  },
});

export default Login;
