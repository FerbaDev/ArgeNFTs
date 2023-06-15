import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../asyncMock";

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { id } = useParams();
  console.log(id);

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
      style={{ backgroundColor: "" }}
    />
  );
};
