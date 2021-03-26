import WelcomeImage from "./assets/svg/welcome.svg";
import Button from "./components/Button";

const Home = () => {
  return (
    <>
      <div className="flex justify-center">
        <img className="w-11/12" src={WelcomeImage} alt="welcome_image" />
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-11/12">
          <Button type="SignUp" />
          <Button type="SignIn" />
        </div>
      </div>
    </>
  );
};

export default Home;
