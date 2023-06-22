CartContainer;
import { CartContainer } from "../componentes/pages/cart/CartContainer";
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
];
