
const initState = {
  users: [
    { id: 1, name: "John Doe", email: "john@doe.com" },
    { id: 2, name: "Jane Smith", email: "jane@smith.com" },
  ],
  post: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log(">>> Run Into Init User: ", action.payload);
      const newUsersList = state.users.filter(
        (user) => user.id !== action.payload.id
      );
      const currentUser = state.users.filter(
        (user) => user.id === action.payload.id
      );
      return {
        ...state,
        post: [...state.post, currentUser], // keep the original
        users: newUsersList,
      };
    case "CREATE_USER":
      const id = Math.floor(Math.random() * 1000);
      let user = {
        id: id,
        name: `random - ${id}`,
        email: `random${id}@gmail.com`,
      };
      return {
        ...state,
        users: [...state.users, user],
      };
    default:
      return state;
  }
};


export default rootReducer;
