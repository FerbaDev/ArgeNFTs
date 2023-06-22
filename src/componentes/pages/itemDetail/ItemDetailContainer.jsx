import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../asyncMock";
import { CartContext } from "../../../context/CartContext";

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { agregarAlCarrito, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);
  console.log("la cantidad es:", cantidad);

  useEffect(() => {
    let productFind = products.find((product) => product.id === id);

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <ItemDetail
      productSelected={productSelected}
      agregarAlCarrito={agregarAlCarrito}
      cantidad={cantidad}
      style={{ backgroundColor: "" }}
    />
  );
};
