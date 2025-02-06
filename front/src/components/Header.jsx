import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";

function Header() {
  const { stage, user } = useUser();
  return (
    <>
      <header>
        <h1>Quiz</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {stage > 1 && (
            <li>
              Welcome{" "}
              <strong>
                <em>{user}</em>
              </strong>
            </li>
          )}
        </ul>
      </header>
    </>
  );
}

export default Header;
