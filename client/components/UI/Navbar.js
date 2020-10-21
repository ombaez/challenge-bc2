import { Navbar, Nav } from "react-bootstrap";

import Link from "next/link";
const NavLink = ({ href, children }) => (
  <Link href={href}>
    <Navbar.Brand
      style={{ cursor: "pointer", color: "white", fontSize: "1em" }}
    >
      {children}
    </Navbar.Brand>
  </Link>
);

export const NavbarCustomed = ({ children, ...rest }) => (
  <Navbar bg="primary" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <NavLink href="/">{"Inicio"}</NavLink>
      <Nav className="ml-auto" >
        <NavLink href="/post-passengers">{"Nuevo pasajero"}</NavLink>
        <NavLink href="/post-packages">{"Nuevo equipaje"}</NavLink>
        <NavLink href="/get-packages">{"Ver equipaje"}</NavLink>
        <NavLink href="/checkout-packages">{"Retira equipaje"}</NavLink>
        <NavLink href="/passengers-with-package">{"Pasajero/Equipaje"}</NavLink>
        <NavLink href="/all-passengers">{"Todos"}</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
