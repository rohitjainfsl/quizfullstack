import { useUser } from "../contexts/UserProvider";

function Home() {
  const { setPopup, savedUser } = useUser();
  return savedUser ? (
    <p>{savedUser}</p>
  ) : (
    <button onClick={() => setPopup(true)}>Start Quiz</button>
  );
}

export default Home;