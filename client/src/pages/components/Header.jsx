import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-center w-full h-16 p-4 bg-white bg-opacity-70 bg-clip-padding">
      <Link to="/" className="focus:outline-none">
        <div className="flex gap-x-2">
          <span className="material-icons">code</span>
          <span className="font-bold font-roboto">Mern Auth App</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
