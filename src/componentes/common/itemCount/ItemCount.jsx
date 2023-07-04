import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);
  const [isAdd, setIsAdd] = useState(false);

  //VER CLASE DE HOOKS Y LLEVAR FUNCIONES A ARCHIVO HOOKS
  const agregar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <Box>
      {!isAdd && (
        <>
          <Box>
            <h2 style={{ color: "black" }}>{cantidad}</h2>
            <Button variant="contained" color="primary" onClick={agregar}>
              +
            </Button>
            <Button variant="contained" color="primary" onClick={disminuir}>
              -
            </Button>
          </Box>
        </>
      )}
      <Box>
        {isAdd ? (
          <>
            <Link to={"/cart"}>
              <Button variant="contained" color="success">
                Ir al carrito
              </Button>
            </Link>
            <Link to={"/home"}>
              <Button variant="contained">Seguir comprando</Button>
            </Link>
          </>
        ) : (
          <Button
            onClick={() => {
              onAdd(cantidad);
              setIsAdd(true);
            }}
            disabled={!stock}
            sx={{ color: "black", bgcolor: "primary.light", m: 2 }}
          >
            Agregar al carrito
          </Button>
        )}
      </Box>
    </Box>
  );
};
