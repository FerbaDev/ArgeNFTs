import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  console.log(cart);
  return (
    <div
      style={{
        background:
          "linear-gradient(54deg, rgba(66,165,245,1) 75%, rgba(233,230,128,1) 93%)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" component="div">
        Carrito
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          {cart.map((product) => {
            return (
              <Box
                sx={{
                  maxWidth: 345,
                  display: "inline-block",
                  mx: "2px",
                  transform: "scale(0.8)",
                  bgcolor: "lightblue",
                  padding: "10px",
                  borderRadius: "5px",
                }}
                key={product.id}
              >
                <Typography variant="h5" component="div">
                  {product.nombre}
                </Typography>
                <Avatar
                  alt="#"
                  src={product.img}
                  sx={{ width: 200, height: 200 }}
                  variant="square"
                />
                <Typography variant="body1">
                  Precio: ${product.precio}
                </Typography>
                <Typography>Cantidad: {product.quantity}</Typography>
                <Button onClick={() => removeById(product.id)}>Eliminar</Button>
              </Box>
            );
          })}
        </div>
        {cart.length ? (
          <>
            <div>
              <h2>Summary</h2>
              <p>obras adquiridas: {cart.length}</p>
              <p>Subtotal: ${total}</p>
              <Link to={"/checkout"}>
                <Button size="small" variant="contained">
                  Confirmar compra
                </Button>
              </Link>
              <Button
                size="small"
                variant="contained"
                color="error"
                onClick={clearCart}
              >
                Limpiar carrito
              </Button>
            </div>
          </>
        ) : (
          <div>
            <h3>El carrito está vacío</h3>
            <Link to={"/"}>
              <Button variant="contained">Ver colecciones</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
