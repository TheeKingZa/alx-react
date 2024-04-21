import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import { AppContext, user } from "./AppContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      displayDrawer: false,
      user: user, // Set initial user data
      logOut: this.logOut, // Assign logOut method
    };

    // Bind event handlers
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  // Sample data for course list
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  // Sample data for notifications
  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() }, // Get latest notification
  ];

  // Event handler for key press
  handleKeyPress(e) {
    // Check if Ctrl + h is pressed
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.props.logOut(); // Trigger logout
    }
  }

  // Event handler to display drawer
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  // Event handler to hide drawer
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  // Lifecycle method - add key press event listener
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  // Lifecycle method - remove key press event listener
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  // Method to log in user
  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  // Method to log out user
  logOut() {
    this.setState({
      user: user, // Reset user data to initial state
    });
  }

  render() {
    return (
      // Provide AppContext to nested components
      <AppContext.Provider
        value={{
          user: this.state.user,
          logout: this.state.logOut,
        }}
      >
        <React.Fragment>
          <div className={css(styles.App)}>
            <div className="heading-section">
              {/* Render notifications */}
              <Notifications
                listNotifications={this.listNotifications}
                displayDrawer={this.state.displayDrawer}
                handleDisplayDrawer={this.handleDisplayDrawer}
                handleHideDrawer={this.handleHideDrawer}
              />
              {/* Render header */}
              <Header />
            </div>
            {/* Conditional rendering based on user's login status */}
            {this.state.user.isLoggedIn ? (
              // If user is logged in, render course list
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              // If user is not logged in, render login form
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            {/* Render news section */}
            <BodySection title="News from the school">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo
                ipsa iste vero dolor voluptates.
              </p>
            </BodySection>
            {/* Render footer */}
            <Footer />
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

// Styles for the component
const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    position: "relative",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
});

// Default props and prop types for App component
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
