import { useState } from "react";
import axios from "axios";
import https from "https";
import { FormCustomed as Form } from "../components/UI/Form/Form";
import { ButtonCustomed as Button } from "../components/UI/Button/Button";
import { AlertCustomed as Alert } from "../components/UI/Alert";

export default function CheckoutPackages() {
  const [form, setForm] = useState({});
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { passenger_id } = form;

    const postPackage = await axios.post(
      `http://localhost:8080/packages/checkout/${passenger_id}`,
      form,
      {
        headers: { "Content-Type": "application/json" },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
          requestCert: false,
        }),
      }
    );

    setData(postPackage.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{margin:"2em"}}>
      <h1>Checkout</h1>
      <Form onSubmit={handleSubmit} id="form">
        <label>
          Ingrese id pasajero para retirar equipaje
          <input
            type="text"
            onChange={handleChange}
            name="passenger_id"
          ></input>
        </label>
        <Button type="submit">Enviar</Button>
      </Form>

      {data[1] && (
        <Alert
          key={"idx"}
          variant={"primary"}
          text={`Cantidad de equipajes disponibles = ${
            3 - data[1].equipaje_id.length
          }`}
        ></Alert>
      )}

      {data.msg && (
        <Alert key={"idx"} variant={"warning"} text={data.msg}></Alert>
      )}
    </div>
  );
}
