import { useEffect, useState } from "react";
import axios from "axios";
import https from "https";
import { CardCustomed as Card } from "../UI/Cards";

export default function Passengers() {
  const [passengersData, setPassengersData] = useState({});
  useEffect(() => {
    const getAll = async () => {
      const all = await axios({
        url: "http://localhost:8080/passengers",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
          requestCert: false,
        }),
      });

      setPassengersData(all);
    };

    getAll();
  }, []);

  return (
    <div
      style={{
        margin: "2em",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Card data={passengersData.data} />
    </div>
  );
}
