function ContactPage() {
  return (
    <>
      <div className="container">
        <div className="contact">
          <h1 className="primary-header">
            LET'S WORK <br /> <span className="t-o">TOGETHER</span>{" "}
          </h1>
          <div className="g-d">
            <div className="form-block">
              <p className="txt t-x">
                I'M OPEN FOR COLLABORATIONS OR JUST A CHAT, LET'S TALK.
              </p>
              <p className="txt">CELL: +1 8259457181</p>
              <p className="txt">SAY HI: feyifakolade@gmail.com</p>
            </div>

            <div className="form">
              <form action="">
                <ul className="form-ul">
                  <div className="form-flex">
                    <li className="form-li">
                      <input
                        type="text"
                        placeholder="NAME"
                        required
                        className="input"
                      />
                    </li>
                    <li className="form-li">
                      <input
                        type="email"
                        placeholder="EMAIL"
                        required
                        className="input"
                      />
                    </li>
                  </div>
                  <li className="form-li">
                    <textarea
                      placeholder="MESSAGE"
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
