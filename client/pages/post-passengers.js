import { useState } from "react";
import axios from "axios";
import https from "https";
import { FormCustomed as Form } from "../components/UI/Form";
import { ButtonCustomed as Button } from "../components/UI/Button";
import { AlertCustomed as Alert } from "../components/UI/Alert";
import Link from "next/link";

export default function PostPassengers() {
  const [form, setForm] = useState({});
  const [passenger, setPassenger] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postPassenger = await axios.post(
      "http://localhost:8080/passengers",
      form,
      {
        headers: { "Content-Type": "application/json" },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
          requestCert: false,
        }),
      }
    );

    console.log(postPassenger);

    if (postPassenger.status == 200) {
      setPassenger(postPassenger.data);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {JSON.stringify(form, null, 2)}
      <h1>POST-PASSENGERS</h1>
      <Form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="name"></input>
        <input type="text" onChange={handleChange} name="nroVuelo"></input>
        <Button type="submit"> ENVIAR</Button>
      </Form>
      {passenger && (
        <Alert
          variant={"primary"}
          text={`${passenger.id} \n ${passenger.nroVuelo} \n ${passenger.name}`}
        />
      )}

      <Link href="/post-packages">
        <Button>Cargar Equipaje</Button>
      </Link>
    </div>
  );
}
