import { Button } from "react-bootstrap";

export const ButtonCustomed = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
);
