// notifications.js

// Import necessary modules
import * as notificationData from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

// Define schema entities
const user = new schema.Entity("users"); // Define a schema entity for users
const message = new schema.Entity("messages", {}, { idAttribute: "guid" }); // Define a schema entity for messages with a custom ID attribute
const notification = new schema.Entity("notification", { // Define a schema entity for notifications
  author: user, // Define a relationship with the user entity
  context: message, // Define a relationship with the message entity
});

// Normalize the data using the defined schema
const normalized = normalize(notificationData, [notification]);

// Function to get all notifications for a given user
export default function getAllNotificationsByUser(userId) {
  // Initialize an array to store output
  const output = [];
  // Get notifications and messages entities from normalized data
  const notifications = normalized.entities.notification;
  const messages = normalized.entities.messages;

  // Loop through notifications
  for (const id in notifications) {
    // Check if the author of the notification matches the provided userId
    if (notifications[id].author === userId) {
      // If matched, push the corresponding message to the output array
      output.push(messages[notifications[id].context]);
    }
  }

  // Return the output array containing all notifications for the user
  return output;
}

// Export the normalized data for testing purposes
export { normalized };
