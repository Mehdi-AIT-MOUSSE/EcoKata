
import Containner from "@/components/containner";
import HeroSection from "@/components/heroSection";
import NewsLetter from "@/components/newsLetter";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewsLetter />
    </main>
  );
}
