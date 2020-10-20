import { useState, useEffect } from "react";
import axios from "axios";
import https from "https";
import { CardCustomed as Card } from "../components/UI/Cards";

export default function PassengersWithPackage() {
  const [passengersWithPackage, setPassengersWithPackage] = useState({});

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
      setPassengersWithPackage(res.data);
    };

    fetchPassengersWithPackage();
  }, []);

  console.log(passengersWithPackage, "client");
  return (
    <div
      style={{
        marginTop: 50,
        display: "flex",
        "flex-direction": "row",
        "flex-wrap": "wrap",
      }}
    >
      <Card data={passengersWithPackage.passengerWithPackage} />
    </div>
  );
}
