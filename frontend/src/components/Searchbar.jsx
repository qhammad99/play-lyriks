import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    // to prevent reload on submission
    e.preventDefault();

    navigate(`/search/${searchTerm}`)
  }

  return (
    <div onSubmit={handleSubmit} className="xl:mr-[460px] mr-0 px-8 xl:ml-0 ml-4">
      <form
        autoComplete="off"
        className="p-2 text-gray-400 focus-within:text-gray-600"
      >
        <label htmlFor="search-field" className="sr-only">
          Search songs
        </label>

        {/* <div className="flex flex-row justify-start items-center border-2 rounded-full border-gray-600 border-solid"> */}
        <div className="flex flex-row justify-start items-center border-b-2 border-gray-600 border-solid">
          <FiSearch className="w-5 h-5 ml-4 text-gray-200" />
          <input
            name="search-field"
            id="search-field"
            autoComplete="off"
            placeholder="Search"
            type="search"
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value) }}
            className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
          />
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
