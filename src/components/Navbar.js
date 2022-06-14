import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  //storeに保存されているstateデータの中から必要なデータを選択して取り出すことができます。
  //   console.log(
  //     useSelector((store) => {
  //       console.log(store);
  //     })
  //   );
  //   const amount = useSelector((store) => store.cart.amount);
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Shopping</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
