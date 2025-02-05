import { createContext, useContext, useState } from "react";

const userContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const [popup, setPopup] = useState(false);
  return (
    <userContext.Provider value={{ user, setUser, popup, setPopup }}>
      {children}
    </userContext.Provider>
  );
}

export function useUser() {
  const context = useContext(userContext);
  return context;
}

export default UserProvider;
