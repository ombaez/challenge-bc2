import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { NavbarCustomed as Navbar } from "../components/UI/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
