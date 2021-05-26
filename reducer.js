
const initialUser = {
  name: 'Joe',
  email: 'joe@gmail.com'
};

function userReducer(state, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload.name };
    case "CHANGE_EMAIL": 
      return { ...state, email: action.payload.email };
    default:
      return state
  }
}

const result = userReducer(initialUser, { type: 'CHANGE_EMAIL', payload: { email: 'joe2@gmail.com' } });
console.log(result.email === 'joe2@gmail.com')