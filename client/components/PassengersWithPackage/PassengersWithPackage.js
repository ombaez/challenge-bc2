import { useState, useEffect } from "react";
import axios from "axios";
import https from "https";
import { CardCustomed as Card } from "../UI/Cards";
import { AlertCustomed as Alert } from "../UI/Alert";

export default function PassengersWithPackage() {
  const [passengerWithPackage, setPassengersWithPackage] = useState([]);

  useEffect(() => {
    const fetchPassengersWithPackage = async () => {
      const res = await axios({
        url: "http://localhost:8080/passengers/with-package",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
          requestCert: false,
        }),
      });
      console.log(res.data, "res");
      setPassengersWithPackage(res.data.passengerWithPackage);
    };

    fetchPassengersWithPackage();
  }, []);

  console.log(passengerWithPackage, "client");
  return (
    <div
      style={{
        marginTop: "2em",
      }}
    >
      {passengerWithPackage && passengerWithPackage.length > 0 ? (
        <Card data={passengerWithPackage} />
      ) : (
        <Alert variant={"info"} text={"No hay equipajes cargados por pasajeros"} />
      )}
    </div>
  );
}
