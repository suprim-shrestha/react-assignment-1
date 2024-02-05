import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="mb-3 flex gap-3 text-xl">
      <Link to="timer" className="hover:font-bold">
        Timer
      </Link>
      <Link to="weather" className="hover:font-bold">
        Weather
      </Link>
      <Link to="activity" className="hover:font-bold">
        Activity Log
      </Link>
    </div>
  );
}

export default NavBar;
