import { Form } from "react-bootstrap";
// import styles from "../styles/Home.module.css";
import styles from "./Form.module.css";

export const FormCustomed = ({ children, ...rest }) => (
  <form className={styles.formMain} {...rest}>
    {children}
  </form>
);
