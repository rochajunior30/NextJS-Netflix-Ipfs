import React from "react";
import FeatureWrapper from "../components/Feature/FeatureWrapper";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import Logo from "../components/Header/Logo";
import Navbar from "../components/Header/Navbar";
import SigninButton from "../components/Header/SigninButton";
import FeatureTitle from "../components/Feature/FeatureTitle";
import Warning from "../components/Feature/Warning";

function HeaderCompound({ children }) {
  return (
    <>
      <HeaderWrapper>
        <Navbar>
          <Logo />
          <SigninButton>Entrar</SigninButton>
        </Navbar>
        <FeatureWrapper>
          <FeatureTitle>Filmes ilimitados, programas de TV e muito mais.</FeatureTitle>
        </FeatureWrapper>
        {children}
      </HeaderWrapper>
    </>
  );
}

export default HeaderCompound;
