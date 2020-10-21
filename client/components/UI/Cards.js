import Link from "next/link";
import { Card } from "react-bootstrap";
import { ButtonCustomed as Button } from "../UI/Button/Button";

export const CardCustomed = ({ data }) => {
  return (
    <div>
      {data &&
        data.map((passenger) => {
          const date = passenger.updatedAt.split("T");
          return (
            <Card
              key={passenger.id}
              style={{
                maxHeight: "fit-content",
                margin: "2em",
              }}
            >
              {passenger.nroVuelo && (
                <Card.Body
                  key={passenger.id}
                  style={{
                    margin: 10,
                    border: "2px solid grey",
                    maxHeight: "fit-content",
                  }}
                >
                  <Card.Title>{passenger.name}</Card.Title>
                  <Card.Subtitle>{passenger.id}</Card.Subtitle>

                  <Card.Text className="mb-2 text-muted">{`Fecha y hora de creacion:   ${
                    date[0]
                  } // ${date[1].slice(0, 8)}
                `}</Card.Text>

                  <Link href={`/get-passenger/${passenger.id}`}>
                    <Button>{"Datos"}</Button>
                  </Link>
                </Card.Body>
              )}

              {passenger.tipo && (
                <Card.Body
                  key={passenger.id}
                  style={{
                    margin: 10,
                    width: "18rem",

                    border: "2px solid grey",
                    maxHeight: "fit-content",
                  }}
                >
                  <Card.Title>{passenger.tipo}</Card.Title>
                  <Card.Subtitle>{passenger.id}</Card.Subtitle>
                  <Card.Text>{`Descricion: ${passenger.descripcion}`}</Card.Text>
                </Card.Body>
              )}
              <div style={{ display: "flex" }}>
                {passenger.arrayPackage &&
                  passenger.arrayPackage.map((dataPackage) => (
                    <Card.Body
                      key={dataPackage.id}
                      style={{
                        width: "18rem",
                        margin: 10,
                        border: "2px solid grey",
                        backgroundColor: "#17a2b8",
                      }}
                    >
                      <Card.Text>{`IdEquipaje: ${dataPackage.id}`}</Card.Text>
                      <Card.Text>{`Equipaje: ${dataPackage.tipo}`} </Card.Text>
                      <Card.Text>{`Descripcion: ${dataPackage.descripcion}`}</Card.Text>
                    </Card.Body>
                  ))}
              </div>
            </Card>
          );
        })}
    </div>
  );
};
