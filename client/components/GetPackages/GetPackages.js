import { useEffect, useState } from "react";
import axios from "axios";
import https from "https";
import { CardCustomed as Card } from "../UI/Cards";
import { AlertCustomed as Alert } from "../UI/Alert";

export default function Packages() {
  const [allPackages, setAllPackages] = useState([]);
  useEffect(() => {
    const getAllPackages = async () => {
      const res = await axios({
        url: "http://localhost:8080/packages",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
          requestCert: false,
        }),
      });
      console.log(res.data);
      setAllPackages(res.data);
    };

    getAllPackages();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "2em",
        justifyContent: "center",
      }}
    >
      {allPackages.length > 0 ? (
        <Card data={allPackages} />
      ) : (
        <Alert variant={"warning"} text={"No hay equipajes cargados"} />
      )}
    </div>
  );
}
