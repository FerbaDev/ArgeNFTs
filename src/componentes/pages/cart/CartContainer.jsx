import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartContainer = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.nombre}</h2>
            <h3>${product.precio}</h3>
            <h3>{product.quantity}</h3>
            <button onClick={() => removeById(product.id)}>eliminar</button>
          </div>
        );
      })}
      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  );
};
