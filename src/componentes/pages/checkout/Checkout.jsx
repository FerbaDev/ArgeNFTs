import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(54deg, rgba(66,165,245,1) 75%, rgba(233,230,128,1) 93%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
        }}
      >
        <div style={{ padding: "20px", color: "aliceblue" }}>
          <h2>Formulario de confirmación de compra</h2>
          <p>Completa el siguiente formulario para finalizar tu pedido.</p>
        </div>
        <div style={{ padding: "20px" }}>
          <form
            onSubmit={handleSubmit}
            action=""
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1em",
              border: "1px solid aliceblue",
              borderRadius: "5px",
              padding: "20px",
              boxShadow: "4px 5px 63px -9px rgba(255,255,156,0.75)",
            }}
          >
            <TextField
              label="Nombre"
              variant="outlined"
              name="nombre"
              onChange={handleChange}
              helperText={errors.nombre}
              error={errors.nombre ? true : false}
            />
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
              helperText={errors.email}
              error={errors.email ? true : false}
            />
            <TextField
              label="Teléfono"
              variant="outlined"
              name="telefono"
              onChange={handleChange}
              helperText={errors.telefono}
              error={errors.telefono ? true : false}
            />
            <Button
              sx={{ width: "20%" }}
              variant="contained"
              color="success"
              type="submit"
            >
              Confirmar
            </Button>
          </form>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <Link to={"/cart"}>
          <Button variant="contained">Volver al carrito</Button>
        </Link>
        <Link to={"/home"}>
          <Button variant="contained">Volver a la tienda</Button>
        </Link>
      </div>
    </div>
  );
};
