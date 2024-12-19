import { createContext, useContext, useState } from "react";
let initialState = {
  token: null,
  currentUser: null,
  setUser: () => {},
  setToken: () => {},
};
let authState = createContext(initialState);

function AuthProvider({ children }) {
  let [token, _setToken] = useState(localStorage.getItem("Access_Token")||"");
  let [user, setUser] = useState({});

  function setToken(newToken) {
    _setToken(newToken);
    if (newToken) {
      localStorage.setItem("Access_Token", newToken);
    } else {
      localStorage.removeItem("Access_Token");
    }
  }
  return (
    <authState.Provider
      value={{
        user,
        token,
        setToken,
        setUser,
      }}
    >
      {children}
    </authState.Provider>
  );
}

let UseAuth = () => useContext(authState);

export { UseAuth, AuthProvider };
