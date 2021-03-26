import { useHistory, withRouter } from "react-router-dom";
import { useState } from "react";

import fetchApi from "./components/api/contactAPI";
import Button from "./components/Button";
import HandleMessage from "./components/Message";

let response;

const Dashboard = () => {
  const history = useHistory();
  const [showError, changeStatus] = useState(false);
  return (
    <div className="space-y-4">
      {showError ? (
        <HandleMessage
          formType="Dashboard"
          color="red"
          message="Cannot continue!"
        />
      ) : (
        <HandleMessage
          formType="Dashboard"
          color="green"
          message="Logged in successfully!"
        />
      )}
      <div className="space-y-4 font-nunito">
        <span className="text-lg md:text-xl xl:text-2xl">
          <strong>Welcome to User Auth 🎊</strong>
        </span>
        <p>Hope you're enjoying MERN User Auth 😊</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            response = await fetchApi("logout");
            localStorage.removeItem("isLogged");
            history.push("/");
          }}
        >
          <Button type="Logout" />
        </form>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            response = await fetchApi("delete");
            if (response.status !== 202) {
              changeStatus({ showError: true });
            } else {
              localStorage.removeItem("isLogged");
              history.push("/");
            }
          }}
        >
          <Button type="Delete" />
        </form>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
