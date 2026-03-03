import HeroHome from "../components/Home/Hero";
import MainLayout from './MainLayout';
import QuizSection from "../components/Home/QuizSection";
import InsuranceSection from "../components/Home/InsuranceSection";
import Credibility from "../components/Home/Credibility";
import Testimonials from "../components/Home/Testimonials";
import ProviderList from "../components/Home/ProviderList";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <MainLayout>
        <main className="">
          <HeroHome />
          <InsuranceSection />
          <QuizSection />
          <Credibility />
          <Testimonials />
        </main>
      </MainLayout>
    </Suspense>
  );
}
