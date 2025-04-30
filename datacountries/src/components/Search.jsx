const Search = ({ searchValue, searchValueHandler, msg }) => (
  <div>
    find countries <input value={searchValue} onChange={searchValueHandler}></input>
    <p>{msg}</p>
  </div>
);

export default Search;
