// reducerFunctions.test.js
import { initializeTimes, updateTimes } from "./reducerFunctions";

describe("initializeTimes", () => {
  test("should return the correct initial array of available times", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    expect(initializeTimes()).toEqual(expectedTimes);
  });
});

describe("updateTimes", () => {
  test("should return the updated times based on the action type", () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    const action = { type: "UPDATE_TIMES", date: "2024-08-27" };
    const expectedState = ["18:00", "19:00", "20:00"];

    expect(updateTimes(initialState, action)).toEqual(expectedState);
  });

  test("should return the same state for unknown action types", () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    const action = { type: "UNKNOWN_ACTION" };

    expect(updateTimes(initialState, action)).toEqual(initialState);
  });
});
