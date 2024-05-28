'use client'
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import Grid from "./components/Grid";
import { navItems } from "@/data";
import RecentProjects from "./components/RecentProjects";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Approach from "./components/Approach";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <h1>
          <FloatingNav navItems={navItems}/>
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
        </h1>
      </div>
    </main>
  );
}
