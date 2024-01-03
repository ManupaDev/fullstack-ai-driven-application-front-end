import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex p-4 justify-between items-center">
      <Link to={"/"}>Home</Link>      
    </nav>
  );
}

export default Navigation;
