import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componentes/layout/Layout";

import { menuRoutes } from "./routes/menurRoutes";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {menuRoutes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
          <Route
            path="*"
            element={
              <div
                style={{
                  margin: "20px",
                }}
              >
                <h1>error 404</h1>
                <h3>inexistente</h3>
              </div>
            }
          />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

{
  /* <NavBar />
      <Box sx={{ padding: 2, bgcolor: "primary.light" }}>
        <Box sx={{ mb: 2, display: "flex" }}>
          <ItemListContainer greeting={greeting} sx={{ m: 2 }} />
        </Box>
        <ItemDetailContainer />
      </Box>
      <ProductDetailContainer /> */
}
