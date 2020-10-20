import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import Link from "next/link";
const NavLink = ({ href, children }) => (
  <Link href={href}>
    <Navbar.Brand>{children}</Navbar.Brand>
  </Link>
);

export const NavbarCustomed = ({ children, ...rest }) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavLink href="/">{"Home"}</NavLink>
        <NavLink href="/all-passengers">{"All"}</NavLink>
        <NavLink href="/checkout-packages">{"Checkout Packages"}</NavLink>
        <NavLink href="/get-packages">{"Get Packages"}</NavLink>
        <NavLink href="/passengers-with-package">{"Passengers w/ packages"}</NavLink>
        <NavLink href="/post-packages">{"New Packages"}</NavLink>
        <NavLink href="/post-passengers">{"New Passengers"}</NavLink>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);
