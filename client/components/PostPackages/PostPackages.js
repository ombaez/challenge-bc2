import { useState } from "react";
import axios from "axios";
import https from "https";
import { FormCustomed as Form } from "../UI/Form/Form";
import { AlertCustomed as Alert } from "../UI/Alert";
import { ButtonCustomed as Button } from "../UI/Button/Button";

export default function PostPackages() {
  const [form, setForm] = useState({});
  const [info, setInfo] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postPackage = await axios.post(
      "http://localhost:8080/packages",
      { ...form },
      {
        headers: { "Content-Type": "application/json" },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
          requestCert: false,
        }),
      }
    );
    console.log(postPackage.data, "post");
    setInfo(postPackage.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div style={{ margin: "2em auto" }}>
      <h1>Nuevo equipaje</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          Ingrese descripcion
          <input type="text" onChange={handleChange} name="descripcion"></input>
        </label>
        <label>
          Ingrese id de pasajero
          <input
            type="text"
            onChange={handleChange}
            name="passenger_id"
          ></input>
        </label>
        <label>
          Seleccione tipo equipaje
          <select name="tipo" defaultValue={"DEFAULT"} onChange={handleChange}>
            <option value="DEFAULT" disabled>
              Elija Tipo ...
            </option>
            <option value="Grande">Grande</option>
            <option value="Chico">Chico</option>
            <option value="Prendas">Prendas</option>
          </select>
        </label>
        <Button type={"submit"}> Cargar</Button>
      </Form>

      {info.max && (
        <Alert variant={"warning"} text={"Equipaje completo - 3 UN"}></Alert>
      )}
    </div>
  );
}
