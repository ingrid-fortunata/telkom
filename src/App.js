import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState([
    {
      name: "tesingrid",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      html_url: "blablabla",
    },
    {
      name: "tesingrid",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      html_url: "blablabla",
    },
  ]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [userName, setuserName] = useState("");
  const [input, setinput] = useState("");

  // useEffect(() => {
  //   setisLoading(true);
  //   axios
  //     .get(`https://api.github.com/users/${userName}/repos`)
  //     .then((res) => {
  //       localStorage.setItem("data", res.data);
  //       setdata(res.data);
  //       setisLoading(false);
  //     })
  //     .catch(() => {
  //       setisError(true);
  //       setisLoading(false);
  //     });
  // }, [userName]);

  console.log(data);

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
                {obj.html_url}
              </a>
            </span>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="bg-stone-100 py-4 h-screen">
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
      <div>{displayBody}</div>
    </div>
  );
}

export default App;
