import React from "react";
import OptFormWrapper from "../components/OptForm/OptFormWrapper";
import OptFormText from "../components/OptForm/OptFormText";
import OptFormEmail from "../components/OptForm/OptFormEmail";
import OptFormButton from "../components/OptForm/OptFormButton";

function OptFormCompound({ children }) {
  return (
    <>
      <OptFormText>
      Pronto para assistir? Digite seu e-mail para criar ou reiniciar sua inscrição.
      </OptFormText>
      <OptFormWrapper>
        <OptFormEmail></OptFormEmail>
        <OptFormButton>Iniciar</OptFormButton>
      </OptFormWrapper>
      {children}
    </>
  );
}

export default OptFormCompound;
