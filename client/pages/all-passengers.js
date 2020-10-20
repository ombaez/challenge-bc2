import axios from "axios";
import https from "https";
import { CardCustomed as Card } from "../components/UI/Cards";

export async function getServerSideProps() {
  const res = await axios({
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

  return { props: { passengersData: res.data } };
}

export default function Passengers({ passengersData }) {
  return (
    <div
      style={{ display: "flex", "flex-direction": "row", "flex-wrap": "wrap" }}
    >
      <Card data={passengersData} />
    </div>
  );
}
