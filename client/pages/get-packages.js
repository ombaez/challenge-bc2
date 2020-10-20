import { useEffect, useState } from "react";
import axios from "axios";
import https from "https";
import { CardCustomed as Card } from "../components/UI/Cards";

export default function Packages() {
  const [allPackages, setAllPackages] = useState({});
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
      setAllPackages(res);
    };

    getAllPackages();
  }, []);
  return (
    <div>
      <Card data={allPackages.data} />
      Hello World{console.log(allPackages, "a")}
    </div>
  );
}
