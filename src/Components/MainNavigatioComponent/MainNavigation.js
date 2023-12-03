import "./MainNavigation.css";
// Import necessary components from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function MainNavigation() {
  return (
    <div className="navigationDiv">
      <div className="navigationContainer groupButtons">
        <div className="groupButtons leftGroupButtons">
          <h4>Reeco</h4>
          <div className="groupButtons leftNavigations">
            <p>Store</p>
            <p>Orders</p>
            <p>Analytics</p>
          </div>
        </div>
        <div className="groupButtons rightGroupButtons">
          <FontAwesomeIcon icon={faShoppingCart} />
          <p>Hellow James </p>
        </div>
      </div>
    </div>
  );
}
