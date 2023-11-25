import { BasketIcon } from "../icons";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <BasketIcon />
          <div className="amount-container">
            <p className="total-amount">0</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
