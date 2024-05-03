import { useNavigate } from "react-router-dom";

function Architecture() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container arch">
        <h1 className="primary-header arc hover">ARCHITECTURE</h1>
        <h1 className="primary-header hover">INTERIOR</h1>
        <div className="prodd" onClick={() => navigate("/product")}>
          <h1 className="primary-header arc hover">PRODUCT</h1>
        </div>
      </div>
      <div className="service s-s">
        <p className="serv">SERVICES</p>
        <p className="serv serv-btn">GET A PROPOSAL</p>
      </div>
    </>
  );
}

export default Architecture;
