import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [userName, setuserName] = useState("github");
  const [input, setinput] = useState("");

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((res) => {
        localStorage.setItem("data", res.data);
        setdata(res.data);
        setisLoading(false);
        setisError(false);
      })
      .catch(() => {
        setisError(true);
        setisLoading(false);
      });
  }, [userName]);

  console.log(data);
  console.log("loading", isLoading);
  console.log("error", isError);

  const handleInput = (e) => {
    setinput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setuserName(input);
  };

  let displayBody;
  if (data.length > 0) {
    displayBody = data.map((obj) => {
      return (
        <div className="border-2 border-gray-300 shadow-lg rounded-lg p-4 w-1/2 mx-auto space-y-2 my-4">
          <div>
            <span className="font-bold mr-2">Repository Name:</span>
            <span>{obj.name}</span>
          </div>
          <div>
            <span className="font-bold mr-2">Description:</span>
            <span>{obj.description}</span>
          </div>
          <div>
            <span className="font-bold mr-2">Repository URL:</span>
            <span className="text-blue-700 hover:text-gray-700">
              <a href={obj.html_url} aria-label="url">
                <p className="truncate">{obj.html_url}</p>
              </a>
            </span>
          </div>
        </div>
      );
    });
  }

  return (
    <div
      className="bg-stone-100 py-4"
      style={isLoading || isError ? { height: "100vh" } : { height: "100%" }}
    >
      <div className="font-bold text-center">GitHub API</div>
      <form className="flex items-center justify-center flex-col space-y-2">
        <input
          type="text"
          placeholder="GitHub Username"
          id="userName"
          onChange={(e) => handleInput(e)}
          className="border border-gray-500 p-2 outline-none"
        />
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="border border-gray-500 p-1 font-bold hover:bg-gray-300"
        >
          Submit
        </button>
      </form>
      {isLoading && (
        <div className="text-center my-10 flex items-center flex-col justify-center">
          <div className="loading"></div>
          <div>Loading... Please wait..</div>
        </div>
      )}
      {!isLoading && <div>{displayBody}</div>}
      {isError && !isLoading && (
        <div className="text-center my-10 flex items-center flex-col justify-center">
          <div className="bg-gray-500 text-white font-bold p-4 text-lg">X</div>
          <div>Something went wrong, please try again later.</div>
        </div>
      )}
    </div>
  );
}

export default App;
