import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { products } from "../../asyncMock";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.categoria === categoryName
    );

    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 500);
    });
    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "primary.light", p: 2 }}>
      <h1 style={{ color: "whitesmoke" }}>Bienvenidos amigos!</h1>
      <Box>
        <ItemList items={items} />
      </Box>
    </Box>
  );
};
