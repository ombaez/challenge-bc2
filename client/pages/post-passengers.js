import { useState } from "react";
import axios from "axios";
import https from "https";
import { FormCustomed as Form } from "../components/UI/Form/Form";
import { ButtonCustomed as Button } from "../components/UI/Button/Button";
import { AlertCustomed as Alert } from "../components/UI/Alert";
import Link from "next/link";

export default function PostPassengers() {
  const [formData, setFormData] = useState({});
  const [show, setShow] = useState({});
  const [info, setInfo] = useState({});
  const [passenger, setPassenger] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (formData) {
      const postPassenger = await axios.post(
        "http://localhost:8080/passengers",
        formData,
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
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {JSON.stringify(formData, null, 2)}
      <h1>New Passenger</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          Nombre
          <input type="text" onChange={handleChange} name="name"></input>
        </label>
        <label>
          nroVuelo
          <input type="text" onChange={handleChange} name="nroVuelo"></input>
        </label>
        <div>
          <Button type={"submit"}> Crear pasajero</Button>
          <Link href={`/post-packages`}>
            <Button disabled={!passenger.id} variant={"info"}>
              Cargar Equipaje
            </Button>
          </Link>
        </div>
      </Form>
      {passenger.id && (
        <Alert
          variant={"primary"}
          text={`${passenger.id} \n ${passenger.nroVuelo} \n ${passenger.name}`}
        />
      )}
    </div>
  );
}
