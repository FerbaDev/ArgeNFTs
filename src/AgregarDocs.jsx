import { addDoc, collection } from "firebase/firestore";
import { products } from "./componentes/asyncMock";
import { db } from "./firebaseConfig";

export const AgregarDocs = () => {
  const rellenar = () => {
    let itemsCollection = collection(db, "products");
    products.forEach((elemento) => {
      addDoc(itemsCollection, elemento);
    });
  };

  return (
    <div>
      AgregarDocs
      <button onClick={rellenar}>agregar docs</button>
    </div>
  );
};
