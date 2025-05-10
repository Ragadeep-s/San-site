import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="p-4 bg-white shadow-md flex space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/projects" className="hover:underline">Projects</Link>
      <Link to="/gallery" className="hover:underline">Gallery</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </nav>
  );
}
