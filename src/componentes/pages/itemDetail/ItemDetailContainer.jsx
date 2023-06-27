import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../asyncMock";
import { CartContext } from "../../../context/CartContext";
import { Box, CircularProgress } from "@mui/material";

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { agregarAlCarrito, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);
  console.log("la cantidad es:", cantidad);

  const [cantAgregada, setCantAgregada] = useState(0);

  const handleOnAdd = (cantidad) => {
    setCantAgregada(cantidad);
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    agregarAlCarrito(data);
    alert("Se agregó exitosamente");
  };

  useEffect(() => {
    let productFind = products.find((product) => product.id === id);

    const getProduct = new Promise((res) => {
      setTimeout(() => {
        res(productFind);
      }, 500);
    });

    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {productSelected.id ? (
        <ItemDetail
          productSelected={productSelected}
          agregarAlCarrito={agregarAlCarrito}
          cantidad={cantidad}
          style={{ backgroundColor: "" }}
          handleOnAdd={handleOnAdd}
          cantAgregada={cantAgregada}
        />
      ) : (
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
      )}
    </div>
  );
};
