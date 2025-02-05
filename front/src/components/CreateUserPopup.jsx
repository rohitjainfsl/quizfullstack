import { useUser } from "../contexts/UserProvider";

function CreateUserPopup() {
  const { createUser, setUser, user } = useUser();
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your name..."
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={createUser}>Start Quiz</button>
    </div>
  );
}

export default CreateUserPopup;
