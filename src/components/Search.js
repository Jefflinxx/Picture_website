const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input onChange={inputHandler} className="input" type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
