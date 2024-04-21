// Import necessary dependencies and components
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

// Define the main App component
class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = { displayDrawer: false };

    // Bind event handlers/methods
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  // Define lists of courses and notifications
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ];

  // Event handler for key press
  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  }

  // Method to set displayDrawer to true
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

 // Method to set displayDrawer to false
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  // Add keydown event listener when component mounts
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  // Remove keydown event listener when component unmounts
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  // Render the component
  render() {
    return (
      <React.Fragment>
        <div className={css(styles.App)}>
          <div className="heading-section">
            {/* Render Notifications component */}
            <Notifications
              listNotifications={this.listNotifications}
              displayDrawer={this.state.displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
            />
            {/* Render Header component */}
            <Header />
          </div>
          {/* Render CourseList or Login component based on isLoggedIn prop */}
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          {/* Render BodySection component */}
          <BodySection title="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo ipsa
              iste vero dolor voluptates.
            </p>
          </BodySection>
          {/* Render Footer component */}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

// Define CSS styles for the App component
const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    position: "relative",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
});

// Define default props and prop types for the App component
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

// Export the App component as the default export
export default App;
