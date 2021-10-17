import * as actions from "./actionTypes";


export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.LOCATION:
      return [
        action.payload.location
      ];
    default:
      return state;
  }
}
