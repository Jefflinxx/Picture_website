import Search from "../components/Search";
import Picture from "../components/Picture";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const auth = "563492ad6f917000010000019598d5493c0243faa8f28e3b9821710c";
  const initialURL = "https://api.pexels.com/v1/curated?per_page=15&page=1";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  const search = async function (url) {
    const fetchData = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await fetchData.json();
    setData(parseData.photos);
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          return search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
