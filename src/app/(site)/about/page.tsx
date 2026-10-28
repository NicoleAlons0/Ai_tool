import AboutSection from "@/components/About/AboutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nicole Alonso",
  description: "Cybersecurity and information technology portfolio for Nicole Alonso.",
};

const AboutPage = () => {
  return (
    <>
      <AboutSection />
    </>
  );
};

export default AboutPage;
