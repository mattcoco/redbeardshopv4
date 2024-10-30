import { Alert } from "react-bootstrap";

// No uso defaultProps porque quedará deprecado en React 17, en su lugar uso parámetros por defecto de javascript
const Message = ({ variant = "info", children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default Message;
