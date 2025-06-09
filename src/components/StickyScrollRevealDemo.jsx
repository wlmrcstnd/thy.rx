"use client";
import { StickyScroll } from "./StickyScroll";
import { Highlight } from './Highlight';
import { Particles } from "./Particles";
import { LinkPreview } from "./LinkPreview";
import { HeroParallaxDemo } from './HeroParallaxDemo.jsx';
import CircularGallery from './CircularGallery';
import { ParallaxScrollDemo } from "./ParallaxScrollDemo.jsx";
import ScrollFloat from "./ScrollFloat";
import InfiniteScroll from "./InfiniteScroll.jsx";

const items = [
  { content: <span className="font-black text-orange-400">Programming Languages</span> },
  { content: <p>Java • Python • SQL • HTML/CSS • Dart • PHP</p> },
  { content: <span className="font-black text-orange-400">Frameworks and Libraries</span>},
  { content: <p>Flutter • Tailwind CSS</p> },
  { content: <span className="font-black text-orange-400">Data Management</span>},
  { content: <p>Microsoft Excel • Tableau • Python </p> },
  { content: <span className="font-black text-orange-400">Graphic Designing</span>},
  { content: <p>Canva • Adobe Illustrator • Adobe Photoshop</p> },
];

const content = [
  {
    title: "Your Thomasian Developer",
    description: [
      "I'm a graduating student pursuing my ",
      <Highlight key="highlight" className="font-bold">Bachelor's in Computer Science</Highlight>,
      " with a Data Science specialization at the",  
      <span className="font-bold text-orange-400"> University of Santo Tomas </span>,
      "(2022–Present). Alongside diving into machine learning and algorithms, I have maintained", <span className="font-bold text-orange-400"> Dean's List </span>, "standing each term and was honored with the" 
      , <span className="font-bold text-orange-400"> Benavides Outstanding Achievement Award </span>, "in 2025."
    ],
    content: (
      <div className="flex h-full w-full items-center justify-center text-justify text-white">
        <img
          src="/assets/rix2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Academic Journey",
    description:[
      "My academic journey began at ",
      <span className="font-bold text-orange-400">Buting Senior High School</span>,
      " (STEM track, 2020-2022), where I graduated with",  
      <span className="font-bold text-orange-400"> Highest Honors </span>,
      "(Top 4.5/1167 overall, Top 2/231 in STEM), won", <span className="font-bold text-orange-400"> Best Research Paper </span>, ", and led as " 
      , <span className="font-bold text-orange-400"> Class President </span>, "and", <span className="font-bold text-orange-400"> Student Council Treasurer. </span>,
      " Earlier, at ", <span className="font-bold text-orange-400"> San Joaquin-Kalawaan High School </span>, " (2016-2020), I earned consistent honors and multiple awards in science writing and competitions.",
    ],    
    content: (
      <div className="flex h-full w-full items-center justify-center text-justify text-white">
        <img
          src="/assets/medal.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: <LinkPreview url="https://www.stacflow.com">This is STAC</LinkPreview>,
    description:[
      "Every project here is a team win—shoutout to Team", 
      <span className="font-bold text-orange-400">  STAC </span>,
      ", my relentless squad who turns",
      <span className="font-bold text-white"> wild ideas into reality. </span>,
      "We’ve survived all-nighters on sheer determination, celebrated hackathon wins with fist bumps, and proven that the best solutions come from trust, inside jokes, and shared ‘why not?’ attitudes.",
    ],    
    content: (
      <div className="flex h-full w-full items-center justify-center text-justify text-white">
        <img
          src="/assets/stac.JPG"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: <LinkPreview url="https://www.facebook.com/USTCSS">Computer Science Society</LinkPreview>,
    description:[
      "As",
      <span className="font-bold text-orange-400"> Digital Productions Lead </span>,
      "(2024–2025) for", 
      <span className="font-bold text-orange-400"> UST's Computer Science Society </span>,
      ", I designed publications and shaped visual strategy to strengthen our tech community's brand. Previously as",
      <span className="font-bold text-orange-400"> First-Year Rep </span>,
      "(2023–2024), I launched",
       <span className="font-bold text-white"> peer-tutoring programs </span>,
       "and led major events like department seminars and sports festivals, connecting 200+ students through academic and social initiatives.",
    ],
    content: (
      <div className="flex h-full w-full items-center justify-center text-justify text-white">
        <img
          src="/assets/socials/css.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },

  {
    title: <LinkPreview url="https://www.facebook.com/TOMCATust">TOMCAT-UST</LinkPreview>,
    description:[
    "As",
    <span className="font-bold text-orange-400"> Executive Assistant to the Chief Audit Officer </span>,
    "at",
    <span className="font-bold text-orange-400"> TOMCAT-UST  </span>,
    "(2024–2025), I streamlined", 
    <span className="font-bold text-white"> logistics and financial oversight </span>,
    "for major university productions, ensuring seamless execution from procurement to archival documentation.", 
    " My role as", 
    <span className="font-bold text-white"> Director for Logistics </span>,
    "(Grand Pools Training '24, Christmas Campaign '24),",
    <span className="font-bold text-white"> Auditor-in-Charge </span>,
    "(Table Talks '24, MAX '25), and",
    <span className="font-bold text-white"> Logistics Assistant  </span>,
    " (Legacy '25) honed my ability to manage complex events while maintaining meticulous records—balancing creativity with operational precision.",
    ],
    content: (
      <div className="flex h-full w-full items-center justify-center text-justify text-white">
        <img
          src="/assets/socials/tomcat.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },

  {
    title: <LinkPreview url="https://www.facebook.com/profile.php?id=61563942550637">AWS Learning Club - España</LinkPreview>,
    description:[
    "I co-founded and serve as",
    <span className="font-bold text-orange-400"> Chief Marketing Officer </span>,
    "of the",
    <span className="font-bold text-orange-400"> AWS Learning Club – España </span>,
    "(August 2024–Present), where I lead",
    <span className="font-bold text-white"> marketing strategy </span>,
    "and",
    <span className="font-bold text-white"> creative direction </span>,
    "to build a thriving tech community. From designing social media campaigns to developing targeted content, I bridge technical learning with",
    <span className="font-bold text-white"> engaging visuals </span>,
    "–proving cloud education can be both informative and visually compelling.",
    ], 
    content: (
      <div className="flex h-full w-full items-center justify-center text-justify text-white">
        <img
          src="/assets/socials/aws.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  
];
export function StickyScrollRevealDemo() {
  return (
    <div className="relative w-screen h-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={5000}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="w-full h-full"
            containerClassName="w-full h-full"
          />
      </div>
      <div className="relative z-10 w-full mt-5">
    
        <StickyScroll content={content} /> 
        <div id="projects">
        <HeroParallaxDemo/> 
        <div className="flex justify-center w-full mb-40">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              Built them with
            </ScrollFloat>
        </div>
                    <InfiniteScroll
              items={items}
              isTilted={true}
              tiltDirection='left'
              autoplay={true}
              autoplaySpeed={0.1}
              autoplayDirection="down"
              pauseOnHover={true}
            /> 
        </div>

        <div className="flex flex-col items-center gap-8" id="awards"> 
                  <div className="flex justify-center w-full mt-20">
                      <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                      >
                      Little wins that keep me going
                      </ScrollFloat>
                  </div>

          <div style={{ height: '600px', position: 'relative' }} className="w-full"> 
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
          </div>
        <div className="flex justify-center w-full" id="interests">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              Yes, I shower AND touch grass.
            </ScrollFloat>
        </div>
              <ParallaxScrollDemo />
        </div>
      </div>

      

    </div>
  );
}