import { Link, NavLink } from "react-router-dom";
// Ссылки для навигации
export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">SkillStack</Link>
      <div className="space-x-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Home</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Skills</NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Profile</NavLink>
      </div>
    </nav>
  );
}
