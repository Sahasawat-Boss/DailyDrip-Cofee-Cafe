//http://localhost:3000/

import Hero from "./components/Hero";
import About from "./components/About";
import TodayMenu from "./components/TodayMenu";
import ReviewCard from "./components/ReviewCard";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <TodayMenu />
      <ReviewCard />
    </div> 
  );
}
