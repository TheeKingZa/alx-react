import React, { useContext } from "react";
import "./Footer.css"; // Importing CSS styles for the footer
import { getFullYear, getFooterCopy } from "../utils/utils"; // Importing utility functions to get the current year and footer copy
import { AppContext } from "../App/AppContext"; // Importing the AppContext to access user information

function Footer() {
  // Using the useContext hook to access user information from the AppContext
  const { user } = useContext(AppContext);

  return (
    <>
      {/* Footer section with conditional rendering based on user's login status */}
      <div className="App-footer">
        {user.isLoggedIn && ( // If user is logged in, render the "Contact us" link
          <p>
            <a href="#">Contact us</a>
          </p>
        )}
        {/* Copyright notice with current year and footer copy */}
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </>
  );
}

export default Footer;
