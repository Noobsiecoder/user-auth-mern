import Button from "./components/Button";
import ErrorImage from "./assets/svg/404_error.svg";

const ErrorPage = () => {
  return (
    <>
      <div className="mx-auto">
        <img src={ErrorImage} alt="404_error_image" />
      </div>
      <div className="mt-6 space-y-6">
        <h1 className="font-semibold text-center font-roboto">
          404 Page not Found!
        </h1>
        <div className="mt-4">
          <Button type="HomeBtn" />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
