import { useState } from "react";
import axios from "axios";
import https from "https";
import { FormCustomed  as Form } from "../components/UI/Form";

export default function PostPackages() {
  const [form, setForm] = useState({});

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
    console.log(postPackage);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {JSON.stringify(form, null, 2)}
      <h1>POST-EQUIPAJE 1</h1>
      <Form onSubmit={handleSubmit} id="form1">
        <input type="text" onChange={handleChange} name="descripcion"></input>
        <input type="text" onChange={handleChange} name="passenger_id"></input>
        <select name="tipo" defaultValue={"DEFAULT"} onChange={handleChange}>
          <option value="DEFAULT" disabled>
            Elija Tipo ...
          </option>
          <option value="Grande">Grande</option>
          <option value="Chico">Chico</option>
          <option value="Prendas">Prendas</option>
        </select>
        <button type="submit"> ENVIAR</button>
      </Form>
    </div>
  );
}
