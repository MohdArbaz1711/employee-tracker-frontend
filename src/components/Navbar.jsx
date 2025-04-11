import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/dashboard" className="font-bold text-lg">Employee Tracker</Link>
      <div className="space-x-4">
        <Link to="/employees">Employees</Link>
        <Link to="/projects">Projects</Link>
        <button onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/';
        }}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
