import { useNavigate } from "react-router-dom";
import {
  ingresar,
  loginWithGoogle,
  registrarse,
} from "../../../firebaseConfig";

export const FirebaseAuth = () => {
  const navigate = useNavigate();

  let infoInput = {
    email: "pepito@gmail.com",
    password: "123456",
  };

  let infoRegistro = {
    email: "ellocolopez@gmail.com",
    password: "1234567",
  };

  const handleSubmit = async () => {
    let res = await ingresar(infoInput);
    console.log(res);
    navigate("/");
  };

  const registrarseConEmail = async () => {
    let res = await registrarse(infoRegistro);
    console.log(res);
  };

  const handleSubmitGoogle = async () => {
    let res = await loginWithGoogle();
    console.log(res);
  };

  return (
    <div
      style={{
        height: "75vh",
        background:
          "linear-gradient(54deg, rgba(66,165,245,1) 75%, rgba(233,230,128,1) 93%)",
        padding: "20px",
        color: "aliceblue",
      }}
    >
      <div
        style={{
          paddingBlock: "20px",
          border: "1px solid blue",
        }}
      >
        <h1>Autenticación</h1>
        <button onClick={handleSubmit}>ingresar</button>
      </div>
      <div
        style={{
          paddingBlock: "20px",
          border: "1px solid blue",
        }}
      >
        <h2>Aún no estás registrado?</h2>
        <button onClick={registrarseConEmail}>Registrate</button>
      </div>
      <div>
        <h4>Ingresar con Google</h4>
        <button onClick={handleSubmitGoogle}>Conectarse</button>
      </div>
    </div>
  );
};
