import { Card } from "react-bootstrap";

export const CardCustomed = ({ data }) => {
  return (
    <>
      {data &&
        data.map((passenger) => {
          const date = passenger.updatedAt.split("T");
          return (
            <Card
              key={passenger.id}
              style={{ width: "18rem"
            //   , margin: "0 auto"
             }}
            >
              <Card.Body style={{ margin: 10, border: "2px solid grey;" }}>
                <Card.Title>{passenger.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {passenger.nroVuelo}
                </Card.Subtitle>
                <Card.Text>{`Actualizado a las ${date[1].slice(0, 8)} del dia ${
                  date[0]
                }`}</Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
    </>
  );
};
