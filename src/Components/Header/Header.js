import "./Header.css";

export default function Header() {
  return (
    <div className="headerDiv">
      <div className="headerContainer">
        <div className="leftHeaderContent">
          <div className="lighterHeading">
            <p>
              Orders {`>`} <span>Order 3435DSD3</span>
            </p>
          </div>
          <div className="BoldHeading">
            <h3>Order 3435DSD3</h3>
          </div>
        </div>
        <div className="rightHeaderContent">
          <button className="backButton">Back</button>
          <button className="approveButton">Approve Order</button>
        </div>
      </div>
    </div>
  );
}
