"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import TrendingSection from "@/components/TrendingSection";
import RecipeSection from "@/components/RecipeSection";
import WhyChooseSection from "./WhyChooseSection";
import TestimonialSection from "./TestimonialSection";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <HeroSection search={search} setSearch={setSearch} />
      <CategorySection />
      <TrendingSection />
      <RecipeSection search={search} />
      <WhyChooseSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
