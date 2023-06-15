import { Box } from "@mui/material";
import { ItemCount } from "../../common/itemCount/ItemCount";

export const ItemDetail = ({ productSelected }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    console.log(data);
  };

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
          width: "25%",
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
          <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
        ) : (
          <h3>No hay stock</h3>
        )}
      </Box>
    </div>
  );
};
