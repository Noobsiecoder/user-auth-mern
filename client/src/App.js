import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/Error";

import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="absolute flex justify-center w-11/12 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <main className="p-6 bg-white rounded-lg shadow-lg w-96 bg-opacity-70 bg-clip-padding">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            {localStorage.getItem("isLogged") === "true" ? (
              <Route path="/dashboard" component={Dashboard} />
            ) : (
              <Redirect to="/" />
            )}
            <Route component={ErrorPage} />
          </Switch>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
