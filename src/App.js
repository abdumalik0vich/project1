import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCoffee, faSearch, faShoppingBag, faShoppingBasket, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <div className="container">
        <div className="header d-flex justify-content-between">
          <div className="chap d-flex align-items-centre">
            <h1 className="brand">BrandName</h1>
            <ul className="ular d-flex">
              <li>Home</li>
              <li>Product</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="ong d-flex align-items-center">
            <p>Login</p>
            <button className="but">
              Become a member{" "}
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-narrow-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="15" y1="16" x2="19" y2="12" />
                  <line x1="15" y1="8" x2="19" y2="12" />
                </svg>
              </div>
            </button>
          </div>

          <div className="icons d-none">
            <FontAwesomeIcon icon={faSearch} className="text-white  ms-3" />
            <FontAwesomeIcon icon={faShoppingCart} className="text-white ms-3" />
            <FontAwesomeIcon icon= {faBars} className="text-white ms-3" />
          </div>
        </div>
        <div className="text">
          <h1 className="text-white hash">Creating a Beautifull <br /> & Usefull Solutions</h1>
          <p className="pas">We know how large objects will act, but things on a <br />
small scale just do not act that way.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
