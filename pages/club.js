import React, { useState } from "react";
import useContent from "../custom-hooks/useContent";
import BrowseHeaderWrapper from "../components/Header/BrowseHeaderWrapper";
import BrowseNavbar from "../components/Header/BrowseNavbar";
import Logo from "../components/Header/Logo";
import FeatureWrapperBrowse from "../components/Feature/FeatureWrapperBrowse";
import FeatureTitleBrowse from "../components/Feature/FeatureTitleBrowse";
import FeatureSubTitleBrowse from "../components/Feature/FeatureSubTitleBrowse";
import PlayButton from "../components/Header/PlayButton";
import HeaderLink from "../components/Header/HeaderLink";
import AllSlidesWrapper from "../components/Movies/AllSlidesWrapper";
import SlideWrapper from "../components/Movies/SlideWrapper";
import SlideTitle from "../components/Movies/SlideTitle";
import AllCardsWrapper from "../components/Movies/AllCardsWrapper";
import CardWrapper from "../components/Movies/CardWrapper";
import CardImage from "../components/Movies/CardImage";
import CardTitle from "../components/Movies/CardTitle";
import CardDescription from "../components/Movies/CardDescription";
import CardFeatureWrapper from "../components/Movies/CardFeatureWrapper";
import CardFeatureClose from "../components/Movies/CardFeatureClose";
import PlayerVideo from "../components/Movies/PlayerVideo";
import PlayerOverlay from "../components/Movies/PlayerOverlay";
import FooterCompound from "../compounds/FooterCompound";

function BrowsePage() {
  let { series } = useContent("series");
  series = [
    {
      title: "Documentaries",
      data: series.filter((item) => item.genre === "documentaries"),
    },
    {
      title: "Comedies",
      data: series.filter((item) => item.genre === "comedies"),
    },
    {
      title: "Children",
      data: series.filter((item) => item.genre === "children"),
    },
    { title: "Crime", data: series.filter((item) => item.genre === "crime") },
    {
      title: "Feel-Good",
      data: series.filter((item) => item.genre === "feel-good"),
    },
  ];

  let { films } = useContent("films");
  films = [
    { title: "Drama", data: films.filter((item) => item.genre === "drama") },
    {
      title: "Thriller",
      data: films.filter((item) => item.genre === "thriller"),
    },
    {
      title: "Children",
      data: films.filter((item) => item.genre === "children"),
    },
    {
      title: "Suspense",
      data: films.filter((item) => item.genre === "suspense"),
    },
    {
      title: "Romance",
      data: films.filter((item) => item.genre === "romance"),
    },
  ];

  const [category, setCategory] = useState("films");
  const currentCategory = category === "films" ? films : series;
  const [showCardFeature, setShowCardFeature] = useState(false);
  const [activeItem, setActiveItem] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <>
      <BrowseHeaderWrapper>
        <BrowseNavbar>
          <Logo />
          <HeaderLink onClick={() => setCategory("films")}>Films</HeaderLink>
          <HeaderLink onClick={() => setCategory("series")}>Series</HeaderLink>
        </BrowseNavbar>
        <FeatureWrapperBrowse>
          <FeatureTitleBrowse>TOP GUN: MAVERICK</FeatureTitleBrowse>
          <FeatureSubTitleBrowse>
          Na sequência de Top Gun: Ases Indomáveis, acompanhamos a história de Pete “Maverick” Mitchell (Tom Cruise), 
          um piloto à moda antiga da Marinha que coleciona muitas condecorações
          </FeatureSubTitleBrowse>
          <PlayButton onClick={() => setShowPlayer(true)}>Assistir</PlayButton>
          {showPlayer ? (
            <PlayerOverlay onClick={() => setShowPlayer(false)}>
              <PlayerVideo src="http://acsc.cc:80/movie/2121842624/secure/169676.mp4" type="video/mp4" />
            </PlayerOverlay>
          ) : null}
        </FeatureWrapperBrowse>
      </BrowseHeaderWrapper>

      
      <FooterCompound />
    </>
  );
}

export default BrowsePage;
