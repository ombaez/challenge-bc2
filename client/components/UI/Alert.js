import { Alert } from "react-bootstrap";

export const AlertCustomed = ({
  variant,
  text,
  link,
  textForLink,
  ...rest
}) => (
  <Alert
    style={{ margin: "2em 0"}}
    variant={variant}
    {...rest}
  >
    {text}
    {link && <Alert.Link href={link}> {textForLink} </Alert.Link>}
  </Alert>
);
