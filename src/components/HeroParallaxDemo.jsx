"use client";
import React from "react";
import { HeroParallax } from "./HeroParallax";
export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "BPI ReBiCom",
    link: "https://www.figma.com/proto/Z8yxfOcg6MLC3FZIftEnRO/BPI-DataWave?node-id=78-63&node-type=frame&t=FPmDWu5a47q00SEe-1&scaling=scale-down&content-scaling=fixed&page-id=66%3A60&starting-point-node-id=78%3A63",
    thumbnail: "./assets/projects/8.png",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Seaborn"],
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: (e) => {
      e.preventDefault();
      window.open(e.currentTarget.href, '_blank');
    }
  },
  {
    title: "Thy.rx",
    thumbnail: "./assets/projects/10.png",
    technologies: ["NextJS", "ThreeJS", "GSAP", "OGL", "TailwindCSS"],
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    title: "SOLAR",
    thumbnail: "./assets/projects/9.png",
    technologies: ["NextJS", "TailwindCSS", "Tailwind", "Clerk", "Prisma ORM"],
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    title: "HackAttack",
    thumbnail: "./assets/projects/3.png",
    technologies: ["React", "Node.js", "TailwindCSS", "TypeScript"],
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    title: "AuthentiKa",
    thumbnail: "./assets/projects/7.png",
    technologies: ["Python", "NextJS", "Flask", "OpenCV"],
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    title: "HackAttack",
    link: "_blank",
    thumbnail: "./assets/projects/3.png",
    technologies: ["React", "Node.js", "TailwindCSS", "TypeScript"],
    rel: "noopener noreferrer"
  },
  {
    title: "AuthentiKa",
    thumbnail: "./assets/projects/7.png",
    technologies: ["Python", "NextJS", "Flask", "OpenCV"],
    rel: "noopener noreferrer"
  },
  {
    title: "Clash Bytes",
    thumbnail: "./assets/projects/6.png",
    technologies: ["NextJS", "TailwindCSS"],
    rel: "noopener noreferrer"
  },
  {
    title: "BPI ReBiCom",
    link: "https://www.figma.com/proto/Z8yxfOcg6MLC3FZIftEnRO/BPI-DataWave?node-id=78-63&node-type=frame&t=FPmDWu5a47q00SEe-1&scaling=scale-down&content-scaling=fixed&page-id=66%3A60&starting-point-node-id=78%3A63",
    thumbnail: "./assets/projects/8.png",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Seaborn"],
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: (e) => {
      e.preventDefault();
      window.open(e.currentTarget.href, '_blank');
    }
  }
];
