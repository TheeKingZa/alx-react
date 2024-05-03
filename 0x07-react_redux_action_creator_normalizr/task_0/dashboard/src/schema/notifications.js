// Import the JSON data from notifications.json
import notificationData from "../../../../notifications.json";

// Define a function named getAllNotificationsByUser that accepts userId as an argument
export default function getAllNotificationsByUser(userId) {
  // Filter the notificationData array to include only notifications where the author's id matches the provided userId
  // Then, map the filtered notifications to extract only the context objects and return them as an array
  return notificationData.filter(notification => notification.author.id === userId).map(notification => notification.context);
}
