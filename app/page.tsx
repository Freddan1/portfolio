'use client'
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import Grid from "./components/Grid";
import { navItems } from "@/data";
import RecentProjects from "./components/RecentProjects";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import { useEffect } from "react";


export default function Home() {

  // useEffect(() => {
  //   const iframe = document.createElement("iframe");

  //   const iframeStyles = (styleString: string) => {
  //     const style = document.createElement("style");
  //     style.textContent = styleString;
  //     document.head.append(style);
  //   };

  //   iframeStyles(`
  //     .chat-frame {
  //       position: fixed;
  //       bottom: 50px;
  //       right: 50px;
  //       width: 300px;
  //       height: 400px;
  //       border: none;
  //       z-index: 1000;
  //     }
  //   `);

  //   iframe.src = "http://localhost:3000/chatbot";
  //   iframe.classList.add("chat-frame");
  //   document.body.appendChild(iframe);

  //   const handleMessage = (e: MessageEvent) => {
  //     if (e.origin !== "http://localhost:3000") return;
  //     const dimensions = JSON.parse(e.data);
  //     iframe.width = dimensions.width;
  //     iframe.height = dimensions.height;
  //     iframe.contentWindow?.postMessage(
  //       "111fa404-5936-4212-a676-d7087f5b212f",
  //       "http://localhost:3000/"
  //     );
  //   };

  //   window.addEventListener("message", handleMessage);

  //   // Cleanup on component unmount
  //   return () => {
  //     window.removeEventListener("message", handleMessage);
  //     document.body.removeChild(iframe);
  //   };
  // }, []);

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
