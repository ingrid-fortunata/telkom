import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [userName, setuserName] = useState("facebook");

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((res) => {
        setdata(res.data);
        setisLoading(false);
      })
      .catch(() => {
        setisError(true);
        setisLoading(false);
      });
  }, [userName]);

  console.log(data);

  return <div className="font-bold text-blue-500">tes</div>;
}

export default App;
