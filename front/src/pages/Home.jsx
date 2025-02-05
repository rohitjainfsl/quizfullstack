import { useUser } from "../contexts/UserProvider";

function Home() {
  const { setPopup } = useUser();
  return <button onClick={() => setPopup(true)}>Start Quiz</button>;
}

export default Home;
