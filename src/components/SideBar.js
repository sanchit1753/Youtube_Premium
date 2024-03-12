import { useSelector } from "react-redux";

const SideBar = () => {
   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
   if(!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>History</li>
        <li>Watch Later</li>
        <li>Playlists</li>
        <li>Liked videos</li>
      </ul>
    </div>
  );
};

export default SideBar;
