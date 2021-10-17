import * as actions from "./actionTypes";

export function location(location) {
  return {
    type: actions.LOCATION,
    payload: {
      location,
    }
  }
}