CartContainer;
import { CartContainer } from "../componentes/pages/cart/CartContainer";
import { CheckoutContainer } from "../componentes/pages/checkout/CheckoutContainer";
import { FirebaseAuth } from "../componentes/pages/firebaseauth/FirebaseAuth";
import { ItemDetailContainer } from "../componentes/pages/itemDetail/ItemDetailContainer";
import { ItemListContainer } from "../componentes/pages/itemListContainer/ItemListContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categoria",
    path: "/categoria/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "firebaseAuth",
    path: "/firebase-auth",
    Element: FirebaseAuth,
  },
];
