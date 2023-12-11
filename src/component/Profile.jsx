import { useAuth0 } from "@auth0/auth0-react";
import React, { useRef } from "react";
// import JSONPretty from "react-json-pretty";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jz36l68",
        "template_gnljds3",
        form.current,
        "kYyX-TD0KhtJqvcq4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending email. Please try again.");
        }
      );
  };

  return (
    isAuthenticated && (
      <div className="profile">
        <div className="info">
          <img src={user.picture} alt="avatar" />
          <h2>Xin Chào {user.name}!</h2>
        </div>
        <form ref={form} action="" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="email">Company Email</label>
            <input type="email" name="from_email" value={"example@email.com"} />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Tin nhắn</label>
            <textarea
              name="message"
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
