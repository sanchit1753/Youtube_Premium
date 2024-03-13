import { useEffect, useState } from "react";
import { toggleMenu } from "../Utils/appSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../Utils/Constants";

const Header = () => {
  const [searchQuery, setsearchQuery] = useState("");
  // console.log(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

  const Dispatch = useDispatch();

  const toggleMenuHandler = () => {
    Dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 ">
        <div>
          <input
            className="w-1/2 p-2 border border-gray-400 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            placeholder="Search"
          />
          <button className="rounded-r-full border border-gray-400 px-5 py-2 bg-gray-100">
            🔍
          </button>
        </div>
        <div>
          <ul className="fixed bg-white py-2 px-2 w-[34rem] shadow-lg rounded-lg border border-gray">
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 Iphone X</li>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 Iphone 11</li>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 Iphone 12</li>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 Iphone 13</li>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 Iphone 14</li>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 Iphone 15</li>
          </ul>
        </div>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt=""
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
