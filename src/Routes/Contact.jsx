import { useContext } from "react";
import Form from "../Components/Form";
import { ContextGlobal } from "../Components/utils/global.context";

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={state.theme}>
      <h2>Te interesa saber más?</h2>
      <p>Nos pondremos en contacto contigo</p>
      <Form />
    </div>
  );
};

export default Contact;