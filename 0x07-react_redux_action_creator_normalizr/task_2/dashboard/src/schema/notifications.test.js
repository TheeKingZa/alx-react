// Import necessary modules and functions
import getAllNotificationsByUser, { normalized } from "./notifications";

describe("Test for Notifications.js", () => {
  it("verify that the function returns the correct data", () => {
    // Provide a valid userId object with an id property
    const userId = { id: "5debd764a7c57c7839d722e9" };
    // Call the function to get notifications for the user
    const result = getAllNotificationsByUser(userId);
    // Assert that the result is an array
    expect(result).toEqual(expect.any(Array));
  });

  it("should match results", () => {
    // Define the expected results array
    const results = [
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      "5debd76444dd4dafea89d53b",
      "5debd76485ee4dfd1284f97b",
      "5debd7644e561e022d66e61a",
      "5debd7644aaed86c97bf9d5e",
      "5debd76413f0d5e5429c28a0",
      "5debd7642e815cd350407777",
      "5debd764c1127bc5a490a4d0",
      "5debd7646ef31e0861ec1cab",
      "5debd764a4f11eabef05a81d",
      "5debd764af0fdd1fc815ad9b",
      "5debd76468cb5b277fd125f4",
      "5debd764de9fa684468cdc0b",
    ];
    // Assert that the normalized result matches the expected results
    expect(normalized.result).toEqual(results);
  });

  it("should have a correct users entity", () => {
    // Define the expected user entity
    const user = {
      age: 25,
      email: "poole.sanders@holberton.nz",
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32",
    };
    // Assert that the user entity in normalized data matches the expected user data
    expect(normalized.entities.users["5debd764a7c57c7839d722e9"]).toEqual(user);
  });

  it("should have a correct messages entity", () => {
    // Define the expected message entity
    const message = {
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi.",
    };
    // Assert that the message entity in normalized data matches the expected message data
    expect(normalized.entities.messages["efb6c485-00f7-4fdf-97cc-5e12d14d6c41"]).toEqual(message);
  });

  it("should have a correct notifications entity", () => {
    // Define the expected notification entity
    const notificationDummy = {
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      id: "5debd7642e815cd350407777",
    };
    // Assert that the notification entity in normalized data matches the expected notification data
    expect(normalized.entities.notification["5debd7642e815cd350407777"]).toEqual(notificationDummy);
  });
});
