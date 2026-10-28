import PortfolioTabs from "@/components/Home/PortfolioTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Portfolio",
  description: "Design, development, and creative direction portfolio",
};

export default function Home() {
  return <PortfolioTabs />;
}
