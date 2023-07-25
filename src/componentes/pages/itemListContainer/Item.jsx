import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="tarjeta">
      <CardContent>
        <Typography variant="h5" component="div">
          Nombre: {nombre}
        </Typography>
        <img style={{ maxWidth: "95%" }} src={img} alt="" />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Precio: ${precio}
        </Typography>
        <Typography sx={{}} color="text.secondary">
          Stock: {stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button variant="contained" size="small">
            Ver descripcion
          </Button>
        </Link>
      </CardActions>
    </div>
  );
};
