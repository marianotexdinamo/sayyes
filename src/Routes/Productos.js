import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import HeroSection from "../components/HeroSection";

export default function Productos() {
  return (
    <>
      <HeroSection text="Productos" img="../assets/img/hero1.jpg"/>
      <ItemListContainer />
    </>
  );
}
