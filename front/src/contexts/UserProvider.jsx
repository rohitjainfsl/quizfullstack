import { createContext, useContext, useState } from "react";
import instance from "../axiosConfig";

const userContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const [savedUser, setSavedUser] = useState("");
  const [popup, setPopup] = useState(false);

  async function createUser() {
    try {
      await instance.post("/user/save", { name: user });
      setPopup(false);
      setSavedUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <userContext.Provider
      value={{ user, setUser, popup, setPopup, createUser }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUser() {
  const context = useContext(userContext);
  return context;
}

export default UserProvider;
