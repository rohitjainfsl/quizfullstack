import { createContext, useContext, useEffect, useState } from "react";
import instance from "../axiosConfig";

const userContext = createContext(null);

function UserProvider({ children }) {
  const [stage, setStage] = useState(0);
  const [user, setUser] = useState("");
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const response = await instance.get("/category/get");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function registerUser(e) {
    e.preventDefault();
    try {
      await instance.post("/user/save", { name: user });
      changeStage(2);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchQuestions(name) {
    try {
      const response = await instance.get(
        "/question/get/" + name.toLowerCase()
      );
      setQuestions(response.data);
      changeStage(3);
    } catch (error) {
      console.log(error);
    }
  }

  function changeStage(newStage) {
    setStage(newStage);
  }

  function createUser(e) {
    setUser(e.target.value);
  }

  return (
    <userContext.Provider
      value={{
        user,
        createUser,
        registerUser,
        stage,
        changeStage,
        categories,
        fetchQuestions,
        questions,
      }}
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
