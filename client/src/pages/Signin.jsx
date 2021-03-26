import Form from "./components/Form";

const SignIn = () => {
  return (
    <div>
      <Form
        formType="Sign In"
        desc="New to User Auth? "
        message="User doesn't exist!"
        link="/signup"
        linkTitle="Sign Up"
      />
    </div>
  );
};

export default SignIn;
