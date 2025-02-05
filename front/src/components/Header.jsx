import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";
import CreateUserPopup from "./CreateUserPopup";
function Header() {
  const { setPopup, popup, savedUser } = useUser();
  return (
    <>
      <header>
        <h1>Quiz</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
            {savedUser ? (
              <p>{savedUser}</p>
            ) : (
              <button onClick={() => setPopup(true)}>Start Quiz</button>
            )}
          </li>
        </ul>
      </header>
      {(popup ? <CreateUserPopup /> : "")}
    </>
  );
}

export default Header;
