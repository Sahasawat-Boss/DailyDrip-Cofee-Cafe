import Hero from "./components/Hero";
import About from "./components/About";
import TodayMenu from "./components/TodayMenu";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <TodayMenu/>
    </div>
  );
}
