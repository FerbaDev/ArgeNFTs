import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import { CircularProgress } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import "../itemListContainer/item.css";
import Swal from "sweetalert2";

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { agregarAlCarrito, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    agregarAlCarrito(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se agregó correctamente",
      showConfirmButton: false,
      timer: 1300,
    });
  };

  useEffect(() => {
    let itemsCollection = collection(db, "products");
    let refDoc = doc(itemsCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelect({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <div>
      {productSelected.id ? (
        <ItemDetail
          productSelected={productSelected}
          agregarAlCarrito={agregarAlCarrito}
          cantidad={cantidad}
          style={{ backgroundColor: "" }}
          onAdd={onAdd}
        />
      ) : (
        <div className="progress">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
