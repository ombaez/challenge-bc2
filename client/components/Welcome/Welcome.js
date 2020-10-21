import Link from "next/link";
import { Jumbotron } from "react-bootstrap";
import { ButtonCustomed as Button } from "../UI/Button/Button";

export const Welcome = () => {
  return (
    <div style={{ marginTop: "2em" }}>
      <Jumbotron>
        <h1>Bienvenidos</h1>

        <p>Con esta aplicacion podra realizar las siguientes acciones:</p>
        <p>
          <ul>
            <li>
              <p>Ver todos los pasajeros</p>
            </li>
            <li>
              <p>Crear nuevo pasajero</p>
            </li>
            <li>
              <p>Cargar un equipaje para un pasajero</p>
            </li>
            <li>
              <p>Retirar equipaje de un pasajero</p>
            </li>
          </ul>
          <Link href="/all-passengers">
            <Button variant="primary">Ver pasajeros</Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
};
