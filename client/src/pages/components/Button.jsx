import { Link } from "react-router-dom";

const LogoutButton = () => {
  return (
    <button className="w-full p-3 text-sm font-medium text-red-500 bg-white border border-red-500 rounded-md lg:p-2 focus:outline-none md:text-base font-roboto focus:ring-2 focus:ring-red-400 hover:bg-red-500 hover:text-white">
      Logout
    </button>
  );
};

const DeleteButton = () => {
  return (
    <button className="w-full p-3 text-sm font-medium text-white bg-red-500 rounded-md lg:p-2 md:text-base font-roboto focus:outline-none focus:ring-2 focus:ring-red-400">
      Delete
    </button>
  );
};

const SubmitButton = () => {
  return (
    <button className="w-full p-3 text-sm font-semibold text-center text-white transition duration-200 rounded-md lg:p-2 md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg">
      Submit
    </button>
  );
};

const ErrorPageButton = () => {
  return (
    <Link to="/signup">
      <div className="w-full p-3 text-sm font-semibold text-center text-white transition duration-200 rounded-md lg:p-2 md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg">
        Go to Homepage
      </div>
    </Link>
  );
};

const SignUpButton = () => {
  return (
    <Link to="/signup">
      <div className="w-full p-3 text-sm font-semibold text-center text-white transition duration-200 rounded-md lg:p-2 md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg">
        Create new account
      </div>
    </Link>
  );
};

const SignInButton = () => {
  return (
    <Link to="/signin">
      <div className="w-full p-3 mt-4 text-sm font-semibold text-center text-blue-500 transition duration-200 bg-white border border-blue-500 rounded-md lg:p-2 md:text-lg font-nunito focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg focus:border-none lg:hover:border-none lg:hover:text-white lg:hover:bg-blue-500">
        Sign In
      </div>
    </Link>
  );
};

const Button = (props) => {
  switch (props.type) {
    case "SignUp":
      return <SignUpButton />;
    case "SignIn":
      return <SignInButton />;
    case "HomeBtn":
      return <ErrorPageButton />;
    case "Submit":
      return <SubmitButton />;
    case "Logout":
      return <LogoutButton />;
    case "Delete":
      return <DeleteButton />;
    default:
      return null;
  }
};

export default Button;
