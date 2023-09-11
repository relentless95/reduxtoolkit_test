import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import { calculateTotals } from "./features/cart/cartSlice";
import cartItems from "./cartItems";

function App() {
  // const [count, setCount] = useState(0);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;
