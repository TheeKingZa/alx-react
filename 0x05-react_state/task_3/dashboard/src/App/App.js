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

    // Initialize state with default values
    this.state = {
      displayDrawer: false,
      user: user, // Initialize user state with default user from AppContext
      logOut: this.logOut, // Reference to logOut method
      listNotifications: [ // Initialize notifications list with default notifications
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: getLatestNotification() }, // Using utility function to get latest notification
      ],
    };

    // Bind event handler methods
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  // Define list of courses
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  // Event handler for keyboard shortcuts
  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.props.logOut(); // Call the logOut method passed as prop
    }
  }

  // Event handler for displaying the drawer
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  // Event handler for hiding the drawer
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  // Lifecycle method: Attach event listener for keyboard shortcuts
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  // Lifecycle method: Detach event listener when component is unmounted
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  // Method to handle user login
  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  // Method to handle user logout
  logOut() {
    this.setState({
      user: user, // Reset user state to default user from AppContext
    });
  }

  // Method to mark a notification as read
  markNotificationAsRead(id) {
    const newList = this.state.listNotifications.filter((notification) => notification.id !== id);
    this.setState({ listNotifications: newList });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          user: this.state.user, // Provide user context
          logout: this.state.logOut, // Provide logout method in context
        }}
      >
        <React.Fragment>
          <div className={css(styles.App)}>
            <div className="heading-section">
              {/* Render Notifications component */}
              <Notifications
                markNotificationAsRead={this.markNotificationAsRead}
                listNotifications={this.state.listNotifications}
                displayDrawer={this.state.displayDrawer}
                handleDisplayDrawer={this.handleDisplayDrawer}
                handleHideDrawer={this.handleHideDrawer}
              />
              {/* Render Header component */}
              <Header />
            </div>
            {/* Conditional rendering based on user's login status */}
            {this.state.user.isLoggedIn ? (
              // Render CourseList component if user is logged in
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              // Render Login component if user is not logged in
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            {/* Render BodySection component */}
            <BodySection title="News from the school">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo
                ipsa iste vero dolor voluptates.
              </p>
            </BodySection>
            {/* Render Footer component */}
            <Footer />
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

// Define styles using aphrodite
const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    position: "relative",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
});

// Define default props for App component
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};

// Define prop types for App component
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App; // Export App component
