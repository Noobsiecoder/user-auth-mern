import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import fetchApi from "./api/contactAPI";
import Button from "./Button";
import HandleMessage from "./Message";

let response;

const Input = (props) => {
  const svgType = {
    username:
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    email:
      "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    password:
      "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  };
  return (
    <div className="relative flex items-center">
      <svg
        className="absolute w-5 h-5 ml-3 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={
            props.type === "text"
              ? svgType.username
              : props.type === "email"
              ? svgType.email
              : svgType.password
          }
        />
      </svg>
      <input
        className="w-full p-2 pl-10 pr-4 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(event) => props.function(event.target.value)}
        placeholder={props.placeholder}
        autoCapitalize="true"
        autoComplete="true"
        required={true}
      />
    </div>
  );
};

const Form = (props) => {
  const [userName, changeUserName] = useState("");
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  const [showError, changeStatus] = useState(false);
  const history = useHistory();
  const nextResponse = (res, changeStatus, status) => {
    if (res.status !== status) {
      changeStatus({ showError: true });
    } else {
      localStorage.setItem("isLogged", true);
      history.push("/dashboard");
    }
  };
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const data = {
          name: userName,
          email: email,
          password: password,
        };
        if (props.formType === "Sign Up") {
          response = await fetchApi("signup", data);
          nextResponse(response, changeStatus, 201);
        } else if (props.formType === "Sign In") {
          response = await fetchApi("signin", data);
          nextResponse(response, changeStatus, 200);
        } else {
          response = await fetchApi("update", data);
          nextResponse(response, changeStatus, 202);
        }
      }}
    >
      <legend className="space-y-1">
        <div className="text-2xl font-semibold text-center sm:text-3xl md:text-4xl font-roboto">
          {props.formType}
        </div>
        <div className="space-x-1 text-sm md:text-base font-nunito">
          <p className="text-center">
            {props.desc}
            <Link to={props.link} className="font-semibold text-blue-500">
              {props.linkTitle}
            </Link>
          </p>
        </div>
      </legend>
      <fieldset className="mt-6 space-y-4">
        {showError ? (
          <HandleMessage
            formType={props.formType}
            message={response.data.response}
          />
        ) : null}
        {props.formType === "Sign Up" ? (
          <Input
            type="text"
            name="name"
            placeholder="Username"
            value={userName}
            function={changeUserName}
          />
        ) : null}
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          function={changeEmail}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          function={changePassword}
        />
        {props.formType === "Sign In" ? (
          <Link
            to="/forgotpassword"
            className="float-right text-sm italic text-blue-500 underline "
          >
            Forgot Password
          </Link>
        ) : null}
        <Button type="Submit" />
      </fieldset>
    </form>
  );
};

export default Form;
