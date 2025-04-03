import Hero from "./components/Hero";
import About from "./components/About";
import TodayMenu from "./components/TodayMenu";
import ReviewCard from "./components/ReviewCard";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <TodayMenu />
      <ReviewCard />
      <Footer/>
    </div>
  );
}
