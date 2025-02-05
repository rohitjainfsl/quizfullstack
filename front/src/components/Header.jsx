import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";
function Header() {
  const { setPopup } = useUser();
  return (
    <header>
      <h1>Quiz</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <button onClick={() => setPopup(true)}>Start Quiz</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
