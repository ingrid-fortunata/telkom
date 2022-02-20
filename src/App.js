import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [userName, setuserName] = useState("");
  const [input, setinput] = useState("");

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((res) => {
        localStorage.setItem("data", res.data);
        setdata(res.data);
        setisLoading(false);
      })
      .catch(() => {
        setisError(true);
        setisLoading(false);
      });
  }, [userName]);

  console.log(data);

  const handleInput = (e) => {
    setinput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setuserName(input);
  };

  return (
    <div>
      <div className="font-bold">GitHub API</div>
      <form>
        <input
          type="text"
          placeholder="GitHub Username"
          id="userName"
          onChange={(e) => handleInput(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
      {/* <div>{displayBody}</div> */}
    </div>
  );
}

export default App;
