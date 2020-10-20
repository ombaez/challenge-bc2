import axios from "axios";
import https from "https";

export async function getServerSideProps() {
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
  return { props: { data: res.data } };
}

export default function PassengersWithPackage({ data }) {
  return <div>Hello World{console.log(data, "a")}</div>;
}
