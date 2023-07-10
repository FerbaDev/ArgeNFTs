import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./cart.css";
import Swal from "sweetalert2";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);

  const limpiar = () => {
    Swal.fire({
      title: "Seguro queres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vacío", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "info");
      }
    });
  };

  let total = getTotalPrice();

  return (
    <div className="container">
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
            <div className="summary">
              <div>
                <h2>Summary</h2>
                <p>obras adquiridas: {cart.length}</p>
                <p>Subtotal: ${total}</p>
              </div>
              <div>
                <Link to={"/checkout"}>
                  <Button size="small" variant="contained">
                    Confirmar compra
                  </Button>
                </Link>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={limpiar}
                >
                  Limpiar carrito
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h3>El carrito está vacío</h3>
            <Link to={"/home"}>
              <Button variant="contained">Ver colecciones</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
