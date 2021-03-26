import Form from "./components/Form";

const ForgotPassword = () => {
  return (
    <div>
      <Form
        formType="Forgot Password"
        desc="Know your password? "
        link="/signin"
        linkTitle="Sign In"
      />
    </div>
  );
};

export default ForgotPassword;
