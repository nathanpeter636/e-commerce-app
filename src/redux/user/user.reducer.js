const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;



// const INITIAL_STATE = {
//   currentUser: null,
// };

// export default (state = INITIAL_STATE, { type, payload }) => {
//   switch (type) {
//     case "SET_CURRENT_USER":
//       return { ...state, 
//         currentUser: payload };

//     default:
//       return state;
//   }
// };
