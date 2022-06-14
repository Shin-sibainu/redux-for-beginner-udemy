import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/CartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  console.log(cartItems);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    // <div>
    //   <h2>Redux入門</h2>
    // </div>
    <main>
      {isOpen && <Modal />} {/* trueになったときだけ表示する */}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
