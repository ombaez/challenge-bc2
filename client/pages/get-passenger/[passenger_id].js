import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import https from "https";
import { AlertCustomed as Alert } from "../../components/UI/Alert";

export default function GetPassenger() {
  const [passenger, setPassenger] = useState({});
  const router = useRouter();
  const { passenger_id } = router.query;

  console.log(passenger_id);

  useEffect(() => {
    async function getPassenger() {
      const getPassenger = await axios.get(
        `http://localhost:8080/passengers/${passenger_id}`,
        {
          headers: { "Content-Type": "application/json" },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
            requestCert: false,
          }),
        }
      );
      if (getPassenger.data) {
        setPassenger(getPassenger.data);
      }
    }

    getPassenger();
  }, [passenger_id]);

  return (
    <div>
      <h1>Get Passenger</h1>
      {<Alert variant={"success"} text={passenger.msg} />}
      {passenger.id && (
        <Alert
          variant={"primary"}
          text={`${passenger.id} \n ${passenger.nroVuelo} \n ${passenger.name}`}
        />
      )}
    </div>
  );
}
