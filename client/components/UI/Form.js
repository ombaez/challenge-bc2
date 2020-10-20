import { Form } from "react-bootstrap";

export const FormCustomed = ({ children, ...rest }) => (
  <Form {...rest}>{children}</Form>
);
