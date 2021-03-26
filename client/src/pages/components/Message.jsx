const statusInfo = {
  success: {
    color: "green",
    message: {
      dashboard: "Logged in successfully!",
    },
  },
  failure: {
    color: "red",
    message: { signIn: "User doesn't exists!" },
  },
};

const Message = (props) => {
  return (
    <div
      className={`p-3 text-center font-semibold bg-${props.color}-200 border border-${props.color}-500 rounded`}
    >
      <span className={`text-${props.color}-500 font-roboto`}>
        {props.message}
      </span>
    </div>
  );
};

const HandleMessage = (props) => {
  switch (props.formType) {
    case "Sign Up":
      return (
        <Message color={statusInfo.failure.color} message={props.message} />
      );
    case "Sign In":
      return (
        <Message color={statusInfo.failure.color} message={props.message} />
      );
    case "Dashboard":
      return (
        <Message color={props.color} message={props.message} />
      );
    default:
      return null;
  }
};

export default HandleMessage;
