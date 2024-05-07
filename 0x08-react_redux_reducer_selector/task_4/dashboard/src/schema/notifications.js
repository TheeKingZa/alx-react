// src/schema/notifications.js

// Import notifications data and normalize function from the normalizr library
import * as notificationsData from "../../notifications.json";
import { normalize, schema } from "normalizr";

// Define a schema entity for users
const user = new schema.Entity("users");

// Define a schema entity for messages with custom idAttribute
const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

// Define a schema entity for notifications with nested author and context entities
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

// Normalize the notifications data using the defined schema
const normalizedData = normalize(notificationsData.default, [notification]);

// Export the normalized data
export { normalizedData };

// Function to get all notifications by a specific user
export function getAllNotificationsByUser(userId) {
  // Extract notifications and messages entities from the normalized data
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  // Array to store notifications by the specified user
  const notificationsByUser = [];

  // Iterate through each notification entity
  for (const property in notifications) {
    // Check if the author of the notification matches the specified user ID
    if (notifications[property].author === userId) {
      // Push the corresponding message to the notificationsByUser array
      notificationsByUser.push(messages[notifications[property].context]);
    }
  }

  // Return the notifications by the specified user
  return notificationsByUser;
}

// Function to normalize notifications data
const notificationsNormalizer = (data) => {
  // Normalize the data using the defined notification schema
  const normalizedData = normalize(data, [notification]);

  // Return the normalized entities
  return normalizedData.entities;
};

// Export the notificationsNormalizer function as default
export default notificationsNormalizer;
