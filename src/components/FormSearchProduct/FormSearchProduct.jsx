import React from "react";
import { removeVietnameseTones } from "../../utils/removeVietnameseTones";
import "./FormSearchProduct.scss"; // Import CSS file for styling
const FormSearchProduct = ({
  className = "",
  title = "Tìm kiếm...",
  onSearch = () => {},
}) => {
  const handleSearch = (e) => {
    const searchTerm = removeVietnameseTones(e.target.value)
      .toLowerCase()
      .trim();
    onSearch(searchTerm);
  };

  return (
    <div className={`search flex-1  ${className}`}>
      <form
        action=""
        className="ml-5 search-box w-[200px] text-center relative   flex justify-center items-center bg-white "
      >
        <input
          placeholder={title}
          className="input-search w-0 px-2 py-4 transition-all ease-in duration-150  rounded-full outline-none  border-none  "
          type="search"
          onChange={handleSearch}
        />
        <button>
          <i className="icon-search fas fa-search cursor-pointer hover:text-green-500 "></i>
        </button>
      </form>
    </div>
  );
};

export default FormSearchProduct;
