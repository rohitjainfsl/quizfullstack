import { useUser } from "../contexts/UserProvider";

function Home() {
  const {
    stage,
    changeStage,
    user,
    createUser,
    registerUser,
    categories,
    fetchQuestions,
    questions,
  } = useUser();
  return (
    <>
      {stage === 0 && (
        <div className="screen screen1">
          <button onClick={() => changeStage(1)}>START QUIZ</button>
        </div>
      )}

      {stage === 1 && (
        <div className="screen screen2">
          <form action="" onSubmit={registerUser}>
            <input
              type="text"
              placeholder="Enter your name"
              value={user}
              onChange={createUser}
            />
            <button type="submit">Start the quiz</button>
          </form>
        </div>
      )}

      {stage === 2 && (
        <div className="screen screen2">
          <h2>Pick A Category</h2>
          <div className="categories">
            {categories.length > 0
              ? categories.map((category) => {
                  return (
                    <div className="category" key={category._id}>
                      <h3 onClick={() => fetchQuestions(category.name)}>
                        {category.name}
                      </h3>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      )}

      {stage=== 3 && (
        <div className="screen screen3">
          
        </div>
      )}
    </>
  );
}

export default Home;
