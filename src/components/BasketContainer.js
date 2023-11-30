import BasketItem from "./BasketItem";
import { useSelector, useDispatch } from "react-redux";
import { clearBasket } from "../features/basket/basketSlice";

const BasketContainer = () => {
  const { basketItems, total, amount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="basket">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-basket">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="basket">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {basketItems.map((item) => {
          return <BasketItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="basket-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch(clearBasket())}
        >
          clear basket
        </button>
      </footer>
    </section>
  );
};
export default BasketContainer;
