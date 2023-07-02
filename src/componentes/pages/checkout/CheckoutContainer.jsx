import { useFormik } from "formik";
import { Checkout } from "./Checkout";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

export const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  let total = getTotalPrice();
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
      };

      let ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });

      clearCart();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Campo obligatorio")
        .min(3, "Ingrese un dato válido"),
      email: Yup.string()
        .email("Ingrese un mail válido")
        .required("Campo obligatorio"),
      telefono: Yup.string()
        .required("Campo obligatorio")
        .min(10, "Ingrese un dato válido"),
    }),
  });
  console.log(errors);
  return (
    <div>
      {orderId ? (
        alert(`Compra exitosa. Nª de orden ${orderId}`)
      ) : (
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};
