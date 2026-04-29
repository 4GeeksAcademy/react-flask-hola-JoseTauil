export const initialStore = () => {
  return {
    message: null,
    token: sessionStorage.getItem("token") || null, // Lee el token al cargar la web
    todos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'login':
      return {
        ...store,
        token: action.payload
      };
    case 'logout':
      return {
        ...store,
        token: null
      };
    case 'set_hello':
      return {
        ...store,
        message: action.payload
      };
    default:
      return store;
  }
}