import { loginWithGoogle } from "../../../firebaseConfig";
import { Button } from "@mui/material";
import "./auth.css";

import { useNavigate } from "react-router-dom";

export const FirebaseAuth = () => {
  const navigate = useNavigate();

  const handleSubmitGoogle = async () => {
    let res = await loginWithGoogle();
    console.log(res);
    navigate("/home");
  };

  return (
    <div className="container-auth">
      <div
        style={{
          paddingBlock: "20px",
        }}
      >
        <div style={{ paddingBlock: "10px" }}>
          <h1>Autenticación</h1>
          <p>Conectate para poder hacer compras</p>
        </div>
      </div>

      <div>
        <h4>Ingresar con Google</h4>
        <Button variant="contained" onClick={handleSubmitGoogle}>
          Conectarse
        </Button>
      </div>
    </div>
  );
};
