// import toast, { Toaster } from 'react-hot-toast';
const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <div>
          {/* <Toaster position="top-center" reverseOrder={false} /> */}
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
