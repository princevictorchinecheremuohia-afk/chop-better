"use client";

import { useState } from "react";

import Navbar from "./Navbar";
import RecipesHeroSection from "./RecipesHeroSection";
import RecipesPageMainSection from "./RecipesPageMainSection";

export default function RecipesPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <RecipesHeroSection search={search} setSearch={setSearch} />
      <RecipesPageMainSection search={search} />
    </>
  );
}
