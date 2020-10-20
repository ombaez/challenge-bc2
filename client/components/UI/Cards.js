import Link from "next/link";
import { Card } from "react-bootstrap";
import { ButtonCustomed as Button } from "../UI/Button/Button";

export const CardCustomed = ({ data }) => {
  return (
    <>
      {data &&
        data.map((passenger) => {
          const date = passenger.updatedAt.split("T");
          return (
            <Card
              key={passenger.id}
              style={{
                width: "18rem",
                // margin: "0 auto",
              }}
            >
              {passenger.nroVuelo && (
                <Card.Body style={{ margin: 10, border: "2px solid grey;" }}>
                  <Card.Title>{passenger.name}</Card.Title>
                  <Card.Subtitle>{passenger.id}</Card.Subtitle>
                  {/* <Card.Subtitle className="mb-2 text-muted">
                  {`Nro Vuelo: ${passenger.nroVuelo}`}
                </Card.Subtitle> */}
                  <Card.Text>{`Fecha y hora de creacion:   ${
                    date[0]
                  } // ${date[1].slice(0, 8)}
                `}</Card.Text>

                  <Link href={`/get-passenger/${passenger.id}`}>
                    <Button>{"Datos"}</Button>
                  </Link>
                </Card.Body>
              )}

              {passenger.tipo && (
                <Card.Body style={{ margin: 10, border: "2px solid grey;" }}>
                  <Card.Title>{passenger.tipo}</Card.Title>
                  <Card.Subtitle>{passenger.id}</Card.Subtitle>
                  <Card.Text>{`Descricion: ${passenger.descripcion}`}</Card.Text>
                </Card.Body>
              )}

              {passenger.arrayPackage &&
                passenger.arrayPackage.map((dataPackage) => (
                  <>
                    <Card.Text>{`IdEquipaje: ${dataPackage.id}`}</Card.Text>
                    <Card.Text>{`Equipaje: ${dataPackage.tipo}`} </Card.Text>
                    <Card.Text>{`Descripcion: ${dataPackage.descripcion}`}</Card.Text>
                  </>
                ))}
            </Card>
          );
        })}
    </>
  );
};
