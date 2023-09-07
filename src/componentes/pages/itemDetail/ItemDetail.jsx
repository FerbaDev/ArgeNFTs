import { Box, Button } from "@mui/material";
import { ItemCount } from "../../common/itemCount/ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({
  productSelected,

  cantidad,

  onAdd,
}) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(54deg, rgba(66,165,245,1) 75%, rgba(233,230,128,1) 93%)",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: "white",
          borderRadius: "10px",
          width: "auto",
        }}
      >
        <h3>{productSelected.nombre}</h3>
        <img
          src={productSelected.img}
          alt=""
          style={{ width: "95%", boxShadow: 1 }}
        />
        <div>
          <p>Descripción: {productSelected.descripcion}</p>
          <p>Artista: {productSelected.categoria}</p>
          <p>Precio: {productSelected.precio}</p>
        </div>

        {productSelected.stock > 0 ? (
          <div>
            <ItemCount
              stock={productSelected.stock}
              initial={cantidad}
              onAdd={onAdd}
            />
          </div>
        ) : (
          <div>
            <h3>sin stock</h3>
            <Link to={-1}>
              <Button variant="contained">Atrás</Button>
            </Link>
          </div>
        )}
      </Box>
    </div>
  );
};
