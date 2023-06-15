import { Box, Button } from "@mui/material";
import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

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
      <Box>
        <h2 style={{ color: "black" }}>{cantidad}</h2>
        <Button variant="contained" color="primary" onClick={agregar}>
          +
        </Button>
        <Button variant="contained" color="primary" onClick={disminuir}>
          -
        </Button>
      </Box>
      <Box>
        <Button
          onClick={() => onAdd(cantidad)}
          disabled={!stock}
          sx={{ color: "black", bgcolor: "primary.light", m: 2 }}
        >
          Agregar al carrito
        </Button>
      </Box>
    </Box>
  );
};
