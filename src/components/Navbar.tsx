import { Link } from "react-router-dom";

const Navbar = () => {

  return (
      <div className="navbar">
        <h1>
          CREATORVERSE
        </h1>
        <div className="navlinks">
          <Link to="/">view all creators</Link>
          <div className="divider"/>
          <Link to="/new">add a creator</Link>
        </div>
      </div>
  );
}

export default Navbar