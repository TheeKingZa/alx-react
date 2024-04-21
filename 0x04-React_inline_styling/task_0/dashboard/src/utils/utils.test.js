/*utils.test*/
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("return current year", () => {
  expect(getFullYear()).toBe(2024);
});

test("correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("returns right notification", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent Requirement</strong> - complete by EOD");
});