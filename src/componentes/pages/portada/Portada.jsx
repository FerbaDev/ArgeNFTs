import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Portada = () => {
  return (
    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(54deg, rgba(66,165,245,1) 75%, rgba(233,230,128,1) 93%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "aliceblue",
          display: "grid",
          gap: "10px",
        }}
      >
        <h1>Bienvenidos a ArgeNFTs</h1>
        <p>Mercado de NFTs argentinos</p>
        <p>Arte, historia, cultura, lugares y personajes</p>
      </div>
      <div>
        <Link to={"/home"}>
          <Button variant="contained">ir a la app</Button>
        </Link>
      </div>
    </div>
  );
};
