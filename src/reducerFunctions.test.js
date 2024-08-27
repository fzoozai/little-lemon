// Import the functions that use fetchAPI from the appropriate module
import { initializeTimes, updateTimes } from "./reducerFunctions";

// Mock the global fetchAPI function
beforeEach(() => {
  // Set up mocks before each test
  window.fetchAPI = jest.fn();
});

describe("initializeTimes", () => {
  test("should return the correct initial array of available times", () => {
    const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    // Set the mock return value for fetchAPI
    window.fetchAPI.mockReturnValue(mockTimes);

    // Call initializeTimes and verify it returns the expected times
    expect(initializeTimes()).toEqual(mockTimes);
  });
});

describe("updateTimes", () => {
  test("should return the updated times based on the action type", () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const mockUpdatedTimes = ["18:00", "19:00", "20:00"];

    // Set the mock return value for fetchAPI
    window.fetchAPI.mockReturnValue(mockUpdatedTimes);

    const action = { type: "UPDATE_TIMES", date: "2024-08-27" };

    // Call updateTimes and verify it returns the expected updated times
    expect(updateTimes(initialState, action)).toEqual(mockUpdatedTimes);
  });

  test("should return the same state for unknown action types", () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = { type: "UNKNOWN_ACTION" };

    // Call updateTimes with an unknown action type and verify it returns the same state
    expect(updateTimes(initialState, action)).toEqual(initialState);
  });
});
