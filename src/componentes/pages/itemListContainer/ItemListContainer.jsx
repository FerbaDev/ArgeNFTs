import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");

    let consulta;

    if (categoryName) {
      consulta = query(itemsCollection, where("categoria", "==", categoryName));
    } else {
      consulta = itemsCollection;
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
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
