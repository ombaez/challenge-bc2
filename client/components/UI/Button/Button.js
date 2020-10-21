import { Button } from "react-bootstrap";

export const ButtonCustomed = ({ children, ...rest }) => (
  <Button size="sm" {...rest}>
    {children}
  </Button>
);
