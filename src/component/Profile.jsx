import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  return (
    isAuthenticated && (
      <div className="profile">
        <div className="info">
          <img src={user.picture} alt="avatar" />
          <h2>Xin Chào {user.name}!</h2>
        </div>
        <form action="">
          <div className="form-group">
            <label htmlFor="email">Company Email</label>
            <input
              //   ref={emailRef}
              type="text"
              id="email"
              name="email"
              value={"example@email.com"}
              //   defaultValue={user.email ?? "example@email.com"}
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Tin nhắn</label>
            <textarea
              name="content"
              id="textarea"
              rows="10"
              cols="50"
              defaultValue="Tôi cần hỗ trợ tài chính!"
            ></textarea>
          </div>
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
        <div className="logout">
          <button onClick={() => logout()}>logout</button>
        </div>
        {/* <JSONPretty data={user} /> */}
      </div>
    )
  );
};

export default Profile;
