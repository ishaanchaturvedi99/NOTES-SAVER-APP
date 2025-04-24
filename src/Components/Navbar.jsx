// src/Components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">
        PasteBin++
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        <Link to="/pastes" className="hover:text-yellow-300 transition">My Pastes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
