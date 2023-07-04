import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componentes/layout/Layout";

import { menuRoutes } from "./routes/menurRoutes";
import { CartContextProvider } from "./context/CartContext";
import { Portada } from "./componentes/pages/portada/Portada";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<Portada />}></Route>
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
