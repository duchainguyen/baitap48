import React from "react";
import LoginButton from "./component/LoginButton";
import Profile from "./component/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
function App() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="containers">
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <Profile user={user} logout={logout} />
      )}
      {/* <LoginButton /> */}
    </div>
  );
}

export default App;
