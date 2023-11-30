import { useSelector } from "react-redux";
import { BasketIcon } from "../icons";

const Navbar = () => {
  const { amount } = useSelector((store) => store.basket);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <BasketIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
