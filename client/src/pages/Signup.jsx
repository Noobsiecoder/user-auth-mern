import Form from "./components/Form";

const SignUp = () => {
  return (
    <div>
      <Form
        formType="Sign Up"
        desc="Already have an account? "
        link="/signin"
        linkTitle="Sign In"
      />
    </div>
  );
};

export default SignUp;
