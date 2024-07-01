import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(
        (result) => {
          console.log("SUCCESS!");
          console.log(result.text);
          toast.success("Your email has been successfully sent!");
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error(
            "An error occured while sending the email! Try sending again"
          );
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="container">
        <div className="contact">
          <h1 className="primary-header">
            LET'S WORK <br /> <span className="t-o">TOGETHER</span>{" "}
          </h1>
          <div className="g-d">
            <div className="form-bloc">
              <p className="txt t-x">
                I'M OPEN FOR COLLABORATIONS OR JUST A CHAT, LET'S TALK.
              </p>
              <p className="txt">
                CELL:{" "}
                <Link to="tel:+1 8259457181" className="mail">
                  +1 8259457181
                </Link>
              </p>

              <p className="txt">
                SAY HI: {""}
                <Link to="mailto:feyifakolade@gmail.com" className="mail">
                  feyifakolade@gmail.com
                </Link>
              </p>
            </div>

            <div className="form">
              <form action="" ref={form} onSubmit={sendEmail}>
                <ul className="form-ul">
                  <div className="form-flex">
                    <li className="form-li">
                      <input
                        type="text"
                        name="user_name"
                        placeholder="NAME"
                        required
                        className="input"
                      />
                    </li>
                    <li className="form-li">
                      <input
                        type="email"
                        placeholder="EMAIL"
                        name="user_email"
                        required
                        className="input"
                      />
                    </li>
                  </div>
                  <li className="form-li">
                    <textarea
                      placeholder="MESSAGE"
                      name="message"
                      required
                      className="textarea"></textarea>
                  </li>
                </ul>
                <button className="submit">SEND</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
